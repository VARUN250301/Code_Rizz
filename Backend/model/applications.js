const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
        companyName: {
            type: String,
            default: ""
        },
        companyPhone : {
            type : String,
            default : "+91-1231231231"
        },
        companyEmail: {
            type: String,
            default: ""
        },
        coreValues: {
            type: String,
            default: ""
        },
        companyWebsite: {
            type: String,
            default: ""
        },
        companyLogo: {
            type: String,
            default: ""
        },
        companyMission: {
            type: String,
            default: ""
        },
        companyAreaOfInterest: {
            type: String,
            default: ""
        },
        regionsToAquire: {
            type: String,
            default: ""
        },

        initiativeId: {
            type:  mongoose.Types.ObjectId
        },
        
        initiativeEmail: {
            type: String,
            default: ""
        },
        initiativeId: {
            type:  mongoose.Types.ObjectId,
            default: ""
        },
        initiativeType: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: "pending"
        },

    
});

const Applications = mongoose.model("applications", applicationSchema);
module.exports = Applications;