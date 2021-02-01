const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const sgMail = require('@sendgrid/mail')

export default function handler(req, res){
  const mailInfos = req.body;
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey("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")
  const msg = {
    from: 'laportenicolasepitech@gmail.com', // sender address
    to: 'nicolas-1301@live.fr', // list of receivers
    subject: 'sujet: ' + mailInfos.subject, // Subject line
    text: mailInfos.text, // plaintext body
    html: '<h1 style="font-size:26px;">Demande de contact envoyé par : ' + mailInfos.email + '</h1>'+'<br/><b style="font-size:20px; line-height:1.2;">' + mailInfos.text + '</b>' // html body
  }
  
  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
    return res
      .status(200)
      .json({ status: "SUCCESS" });
  })
  .catch((error) => {
    return res
      .status(500)
      .json({ status: "ERROR" });
    console.error(error)
  })

  /*console.log("call mailer done");
  const mailInfos = req.body;
  //const user = 'lazslobonot@hotmail.fr';
  //const pass = 'coupet';
  const user = 'url-render@outlook.com';
  const pass = 'BqRd9hjY@567'

  // create reusable transporter object using the default SMTP transport
  // Configure Nodemailer SendGrid Transporter
  const transporter = nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: "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", // SG password
      },
    })
  );

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: user, // sender address
        to: user, // list of receivers
        subject: 'sujet: ' + mailInfos.subject, // Subject line
        text: mailInfos.text, // plaintext body
        html: '<h1 style="font-size:26px;">Demande de contact envoyé par : ' + mailInfos.email + '</h1>'+'<br/><b style="font-size:20px; line-height:1.2;">' + mailInfos.text + '</b>' // html body
    };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    console.log(mailOptions);
    console.log("error", error);
    console.log("info", info);
    if (!error){
      return res
        .status(200)
        .json({ status: "SUCCESS" });
    } else {
      return res
        .status(500)
        .json({ status: "ERROR" });
    }
  });*/
}
