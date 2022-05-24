const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"ankitonfireinwater@outlook.com",
        pass:process.env.EMAIL_PASSWORD
    }
})

const welcome_mail = (email,name)=>{
    const optionsas = {
        from:"ankitonfireinwater@outlook.com",
        to:email,
        subject:"Starting with task manager app :) ",
        text:`Welcome to the Task-Manager-App ${name}`
    }
    transporter.sendMail(optionsas,function(err,info) {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("sent : "+ info.response);
        }
    })
}

const fairwell_mail = (email,name)=>{
    const optionsas = {
        from:"ankitonfireinwater@outlook.com",
        to:email,
        subject:"Don't leave us :(",
        text:`Exteremly deep pain to leave you ${name}`
    }
    transporter.sendMail(optionsas,function(err,info) {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("sent : "+ info.response);
        }
    })
}

module.exports = {
    welcome_mail,
    fairwell_mail
}