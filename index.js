const express = require('express');
const app=express();
const cors= require('cors');
require('dotenv').config()
const port=process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
const nodemailer=require('nodemailer');







app.get('/', (req,res)=>{
    res.send("Welcome to Server.")
})


app.post('/send',(req,res)=>{
    console.log(req.body);

    const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'zeehello24@gmail.com',
            pass:'Abcdabcd22'
        }
    })

    const mailOpctions={
        from: req.body.email,
        to:'zeehello24@gmail.com',
        subject:`Message From ${req.body.company}`,
        text:req.body.comment
    }


    transporter.sendMail(mailOpctions,(error,info)=>{
        if(error){
            console.log('This is error: ', error)
            res.send("Error")

        }  else{
            console.log('Success message: '+ info)
            res.send("Success")
        }
    })





})






app.listen(port,()=>{
    console.log('Wellcome!')
})