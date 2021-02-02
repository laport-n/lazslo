const sgMail = require('@sendgrid/mail')

export default function handler(req, res){
  const mailInfos = req.body;

  sgMail.setApiKey("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")
  const msg = {
    from: 'l.bonnot@notaires.fr', // sender address
    to: 'l.bonnot@notaires.fr', // list of receivers
    subject: 'sujet: ' + mailInfos.subject, // Subject line
    text: mailInfos.text, // plaintext body
    html: '<h1 style="font-size:26px;">Demande de contact envoyé par : ' + mailInfos.email + '</h1>'+'<br/><b style="font-size:20px; line-height:1.2;">' + mailInfos.text + '</b>' // html body
  }
  sgMail.send(msg).then(() => {
    return res
      .status(200)
      .json({ status: "SUCCESS" });
  }).catch((error) => {
    return res
      .status(500)
      .json({ status: "ERROR" });
  })
}
