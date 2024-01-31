const mongoose = require("mongoose");

const csrValuesSchema = new mongoose.Schema({
    sector: [{
        cause: String,
        metric: String,
        successRate: Number,
        area: String
    }]  
});

const CSR = mongoose.model("csr", csrValuesSchema);
module.exports = CSR;
