import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app=express();
dotenv.config();
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello to memories api');
})


app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use('/posts',postRoutes);


//const CONNECTION_URL='mongodb+srv://guvi:jishitha@cluster.jnc7z.mongodb.net/guvi?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>
console.log(`connection is established and running on port:${PORT}`)
)).catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);