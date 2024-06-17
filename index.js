import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import prodRoute from './routes/index.js';

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('api/products',prodRoute);
app.get('/',(req,res)=>{
    res.send("Hello from the other side!")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Connected to the port`)
})