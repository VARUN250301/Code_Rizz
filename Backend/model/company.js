const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    companyName: {
        type: String,
    },
    companyEmail: {
        type: String,
    },
    coreValues: {
        type: [String],
    },
    companyWebsite: {
        type: String,
    },
    companyLogo: {
        type: String,
    },
    companyMission: {
        type: [String],
    },
    companyAreaOfInterest: {
        type: [String],
    },
    regionsToAquire: {
        type: [String],
    },
})
const Company = mongoose.model("company", companySchema);
module.exports = Company;
