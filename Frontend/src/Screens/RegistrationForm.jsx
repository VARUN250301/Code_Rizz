import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import InputControl from "../InputControl/InputControl";
import { auth } from "../firebase";
import { db } from "../firebase";
import styles from "./registration.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({   
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

 

  const handleSubmission = async () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        const userData = {
          uid: user.uid,
          email: values.email,
        };

        const channelRef = await addDoc(collection(db, "users"), userData);
        // console.log("User added with ID: ", userRef.id);

        navigate("/");
      })

      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div style={{ display: "flex" }} className="signuppp">
      <div className="signUpImage"></div>
      <div className="signUp">
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>
            SIGN<span style={{ color: "black" }}> UP</span>
          </h1>
          <h2 className={styles.heading}>
            Start your journey <br /> <span>today.</span>
          </h2>

          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button
              onClick={handleSubmission}
              disabled={submitButtonDisabled}
              className="signUpbutton"
            >
              Signup
            </button>
            <p
              style={{ marginLeft: "-25vw", marginTop: "10px" }}
              className="aldready"
            >
              Already have an account?{" "}
              <span>
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
