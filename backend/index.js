const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/category.route');
const server = express();
mongoose.set('strictQuery', true); 
require('dotenv').config();
server.use(express.json());
server.use(cors());
server.use('/category',categoryRoutes)
server.use(express.static('./public'));


mongoose.connect(process.env.DATABASE_URL,{dbName:process.env.DB_NAME}).then(() => {
    console.log("Database is connected...")
    server.listen(process.env.PORT,()=>{
        console.log("Server is running...")
    })
}).catch((err) => {
    console.log(err)
});