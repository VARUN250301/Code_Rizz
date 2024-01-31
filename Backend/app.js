require("dotenv").config();
require("./config/database").connect();
const { ObjectId } = require("mongodb");

const cors = require("cors");

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const User = require("./model/user");
const auth = require("./middleware/auth");

const file = fs.readFileSync(__dirname + "/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running.\n");
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // validate the fields
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }

  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.password = undefined;
    user.pin = undefined;

    const option = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(200).cookie("token", token, option).json(user);
  }

  res.status(400).send("Invalid Credentials");
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findOne({ videoId: id });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.post("/users", async (req, res) => {
  try {
    const { userIds } = req.body;

    const users = await User.find({ _id: { $in: userIds } });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/dashboard", auth, async (req, res) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send("Logout success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

//blogs
const Comment = require("./model/comments");


const Company = require("./model/company");


app.post("/register1", async (req, res) => {
  try{
    const { companyName, companyEmail, coreValues, companyWebsite, companyLogo, companyMission, companyAreaOfInterest, regionsToAquire } = req.body;
    const company = await Company.create({ companyName, companyEmail, coreValues, companyWebsite, companyLogo, companyMission, companyAreaOfInterest, regionsToAquire });
    res.status(201).json(company);
  
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

const csrInitiatives = require("./model/initiatives");


app.post("/csr/initiatives", async (req, res) => {
  try{
    const { type, name, about, metric, potenitalImpactMetric, successStory, tags, email} = req.body;
    const initiatives = await csrInitiatives.create({ type, name, about, metric, potenitalImpactMetric, successStory, sectors:tags, email });
    res.status(201).json(initiatives);
  
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
}
);

app.post("/csr/owninitiatives/", async (req, res) => {
  const { email } = req.body;
  try {
    const initiatives = await csrInitiatives.find({
        email: email,
    });
    res.status(200).json(initiatives);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);


app.get("/csr/initiatives", async (req, res) => {
  try {
    const initiatives = await csrInitiatives.find({});
    res.status(200).json(initiatives);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);


module.exports = app;

