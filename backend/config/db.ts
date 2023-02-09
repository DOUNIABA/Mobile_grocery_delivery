import mongoose from 'mongoose'
require('dotenv').config()

mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('connected');
    })
    .catch(error => {
        console.log((error));
    })
