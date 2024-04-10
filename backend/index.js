const express =require("express");
const app = express();
const mongoose = require("mongoose");
const Book  = require('./models/bookModel');

const bookRoute  = require('./routes/bookroutes');
const cors = require('cors');

port=3000;

app.use(express.json());

app.use(cors());
// app.use(
//   cors({
//     origin:'127.0.0.1:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )


const mongoDBURL ='mongodb+srv://dhanepratik543:S14J33F9esYs1Ib2@book.ridhpsu.mongodb.net/';

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("Welcome");
})

app.use('/',bookRoute)


//Mongoose connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });