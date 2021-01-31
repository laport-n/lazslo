var nodemailer = require('nodemailer');

export default function handler(req, res){

  const mailInfos = req.body;
  console.log(mailInfos);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: 'url-render@outlook.com',
        pass: 'BqRd9hjY@567'
      }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'url-render@outlook.com', // sender address
        to: 'url-render@outlook.com', // list of receivers
        subject: 'sujet: ' + mailInfos.subject, // Subject line
        text: mailInfos.text, // plaintext body
        html: '<h1 style="font-size:26px;">Demande de contact envoyé par : ' + mailInfos.email + '</h1>'+'<br/><b style="font-size:20px; line-height:1.2;">' + mailInfos.text + '</b>' // html body
    };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log('ERROR : ', error);
      } else {
      console.log('Message sent: ' + info.response);
    }
  });

}
