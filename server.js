const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')
require('dotenv').config()



const app = express();
const MONGO_URL = process.env.MONGO_URL
const PORT  = process.env.PORT || 3000
// const FRONTEND = process.env.FRONTEND
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// var corsOptions = {
//     origin: FRONTEND,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
app.use(cors())
app.use('/api/product', productRoutes)

//main page /
app.get('/',(req,res)=>{
    // throw new Error('fake error');
    res.send('Hello Main Page')
})

//redirect to another page
app.get('/test',(req,res)=>{
    res.send('Hello test page')
})

app.use(errorMiddleware)
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongodb')
    app.listen(PORT, ()=>{
        console.log(`Node api is running on port 3000`)
    })
}).catch((error)=>{
    console.log(error)
})