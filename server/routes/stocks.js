const {
    fetchStock
} = require("../controller/stockController")

const router = require("express").Router();

router.get("/fetchStock",fetchStock);

module.exports=router;