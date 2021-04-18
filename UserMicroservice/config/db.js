const mongoose = require('mongoose')

require('dotenv/config')


const connectDb = async ()=>{
    mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true}).then(() => {
        console.log("Database connected !");
    }, 
    err => {
        {
            console.log("database not connected due to :", err);
        }
    });
}
module.exports = connectDb;