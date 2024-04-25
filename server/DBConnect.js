const mongoose = require('mongoose');

module.exports.DBConnect = async (DB_URL)=>{
    try{
        const dbOptions ={
            dbName:'NeptuneStocks',
        }
    await mongoose.connect(DB_URL,dbOptions);
    console.log("the database is connected successfully");
    }catch(err){
        console.log(err);
    }

}

