const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/category.route');


const server = express();
mongoose.set('strictQuery', true); 

server.use(express.json());
server.use(cors());

server.use('/category',categoryRoutes)


mongoose.connect('mongodb://localhost:27017/ishop_website').then(() => {
    console.log("Database is connected...")
    server.listen(8000,()=>{
        console.log("Server is running...")
    })
}).catch((err) => {
    console.log(err)
});