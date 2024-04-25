const Stocks = require("../model/stockModel");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const fmpURL = process.env.STOCK_URL
const apiKey = process.env.APIKEY

module.exports.fetchStock = async (req, res, next) => {
    try {
        console.log(req.query)
        const { currentUser } = req.query;
        if (!currentUser || !currentUser._id) {
            throw new Error("User ID not found in request query");
        }
        const userId = currentUser._id;

        let {
            marketCapitalUL,
            marketCapitalLL,
            sector,
            industry,
            priceUL,
            priceLL,
            dividendUL,
            dividendLL,
            volumeUL,
            volumeLL,
            exchange,
            country
        } = req.query.query;

        console.log(typeof (volumeLL))

        // Convert string values to their respective types
        const newData = new Stocks({
            marketCapitalUL: parseFloat(marketCapitalUL),
            marketCapitalLL: parseFloat(marketCapitalLL),
            sector,
            industry,
            priceUL: parseFloat(priceUL),
            priceLL: parseFloat(priceLL),
            dividendUL: parseFloat(dividendUL),
            dividendLL: parseFloat(dividendLL),
            volumeUL: parseFloat(volumeUL),
            volumeLL: parseFloat(volumeLL),
            exchange,
            country,
            user: userId
        });
        console.log(`${fmpURL}?apikey=${apiKey}&country=${country}&exchange=NASDAQ&industry=Software&marketCapMoreThan=${marketCapitalLL}&marketCapLowerThan=${marketCapitalUL}&sector=${sector}&priceMoreThan=${priceLL}&priceLowerThan${priceUL}&dividendMoreThan${dividendLL}&dividendLowerThan${dividendUL}&volumeMoreThan=${volumeLL}&volumeLowerThan=${volumeUL}`)
        await newData.save();
        let NASDAQ = "NASDAQ"
        let UN = "UN"
        console.log(typeof (parseFloat(marketCapitalLL)), marketCapitalLL, "dafdadsfasdf")
        // Ensure that the numeric values are passed as numbers to the API endpoint
        const response = await axios.get(`${fmpURL}?apikey=${apiKey}&country=${country}&exchange=NASDAQ&industry=software
                            &marketCapMoreThan=${marketCapitalLL}&marketCapLowerThan=${marketCapitalUL}&sector=${sector}
                            &priceMoreThan=${priceLL}&priceLowerThan${priceUL}&dividendMoreThan${dividendLL}&dividendLowerThan${dividendUL}
                            &volumeMoreThan=${volumeLL}&volumeLowerThan=${volumeUL}`);
       
    console.log(response.data)
        res.json(response.data);
    } catch (err) {
        next(err);
    }
};
