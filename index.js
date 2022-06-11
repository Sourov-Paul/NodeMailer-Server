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
    console.log(req.body.email);

    const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'zeehello24@gmail.com',
            pass:process.env.PASSWORD
        }
    })

    const mailOpctions={
        from:'zeehello24@gmail.com',
        to: req.body.email,
        subject:`Message From`,
        text:'<h2>Hello Everyone</h2>',
        html:`
        <span>${req.body.name}</span>
        <h4>${req.body.company}</h4>
        <h5>${req.body.number}</h5>
        <h5>${req.body.comment}</h5>
        `
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