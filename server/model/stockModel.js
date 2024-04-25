const mongoose = require("mongoose");

const stockSchema = new mongoose.mongoose.Schema({
    marketCapitalUL: String,
    marketCapitalLL: String,
    sector: String,
    industry: String,
    priceUL: String,
    priceLL: String,
    dividendUL: String,
    dividendLL: String,
    volumeUL: String,
    volumeLL: String,
    exchange: String,
    country: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }

});

module.exports = mongoose.model("Stocks", stockSchema);