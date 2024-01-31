const mongoose = require("mongoose");

const csrInitiatives = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    about: {
        type: String,
        required: true
    },
    metric : {
        type : String,
    },
    potenitalImpactMetric : {
        type : String,
    },
    successStory : {
        type : String,
    },
    sectors :{
        type : [String],
    },
    email : {
        type : String
    },
     location : {
       type: [String]
     }
    },
    );

const Initiatives = mongoose.model("csr", csrInitiatives);
module.exports = Initiatives;
