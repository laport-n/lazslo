var nodemailer = require('nodemailer');

export default function handler(req, res){
  console.log("call mailer done");
  const mailInfos = req.body;
  //const user = 'lazslobonot@hotmail.fr';
  //const pass = 'coupet';
  const user = 'url-render@outlook.com';
  const pass = 'BqRd9hjY@567'
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
      service: 'smtp-mail.outlook.com',
      secureConnection: false,
      port: 465,
      tls: {
        ciphers:'SSLv3'
      },
      equireTLS:true,
      auth: {
        user: user,
        pass: pass
      }
    });

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
    console.log(error);
    console.log(info);
    if (!error){
      return res
        .status(200)
        .json({ status: "SUCCESS" });
    } else {
      return res
        .status(500)
        .json({ status: "ERROR" });
    }
  });
}
