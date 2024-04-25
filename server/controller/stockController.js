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

        const {
            marketCapitalUL,
            industry,
            priceUL,
            dividendUL,
            volumeUL,
            exchange,
            country
        } = req.query.query;

                
        const newData = new Stocks({
            marketCapitalUL: parseFloat(marketCapitalUL),
            industry,
            priceUL,
            dividendUL,
            volumeUL,
            exchange,
            country,
            user: userId
        });
        
        await newData.save();
        
        const response = await axios.get(fmpURL,{
            params:{
                apikey:apiKey,
                industry,
                country,
                exchange,
                marketCapLowerThan:marketCapitalUL,
                dividendLowerThan:dividendUL,
                priceLowerThan:priceUL
            }
        })
        res.json(response.data);
    } catch (err) {
        next(err);
    }
};
