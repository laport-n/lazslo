import React, { useState } from "react";

import Head from 'next/head'
import contact from '../styles/contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendEmail = async () => {
    const url = "http://localhost:3000/api/mailer";
    const mailInfo = {
      name : name,
      email : email,
      subject : subject,
      text : text
    };
    const res = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body : JSON.stringify(mailInfo)
      }
    );
  }

  return (
    <div>
      <div className={contact.container}>
        <div className={contact.leftContainer}>
          <div className={contact.formulaireContainer}>
            <div className={contact.brandContainer}>
              <div className={contact.titleLeft}>
                <h2> Nous contacter par <b className={contact.name}>FORMULAIRE</b></h2>
                </div>
            </div>
            <p className={contact.validator}>Les champs marqués d'un astérisques ( <b className={contact.asterix}>*</b> ) sont obligatoires.</p>
            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre nom <b className={contact.asterix}>*</b></span>
              <input value={name} onChange={(e) => setName(e.target.value)} className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre email <b className={contact.asterix}>*</b></span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Sujet du contact <b className={contact.asterix}>*</b></span>
              <input value={subject} onChange={(e) => setSubject(e.target.value)} className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre message <b className={contact.asterix}>*</b></span>
              <textarea value={text} onChange={(e) => setText(e.target.value)} rows="10" className={contact.input} />
            </div>

            <div className={contact.containerButton}>
              <a onClick={handleSendEmail} className={contact.callToAction}>Envoyer</a>
            </div>

          </div>
        </div>
        <div className={contact.rightContainer}>
          <div className={contact.informationContainer}>

            <div className={contact.brandContainer}>
              <div className={contact.logoContainer}>
                <img className={contact.logo} src={"/assets/icons/BLEU.png"}/>
              </div>
              <div className={contact.logoText}>
                <div className={contact.title}>
                  <h2 className={contact.titleFont}>
                    Lazslo <b className={contact.name}>BONNOT</b>
                  </h2>
                </div>
                <div className={contact.sousTitle}>NOTAIRE | CONSEILS </div>
              </div>
            </div>

            <div className={contact.informations}>
              <p className={contact.informationsLibelle}>Adresse</p>
              <a className={contact.address} target="_blank" href="https://www.google.com/maps/place/712c+Cours+Cardinal+Bertrand+de+Montfavet,+84140+Avignon/@43.9295399,4.8726267,17z/data=!3m1!4b1!4m5!3m4!1s0x12b5ede999f99ecf:0xa765630d90730765!8m2!3d43.9295361!4d4.8748154">712 cours Cardinal Bertrand 84140, Montfavet.</a>

              <p className={contact.informationsLibelle}>Téléphone portable</p>
              <a href="tel:+33622281564" className={contact.callLink}><b className={contact.asterix}>+33 (0)</b> 6 22 28 15 64</a>

              <p className={contact.informationsLibelle}>Téléphone fixe</p>
              <a href="tel:+33490404014" className={contact.callLink}><b className={contact.asterix}>+33 (0)</b> 4 90 40 40 14</a>

              <p className={contact.informationsLibelle}>Email</p>
              <a className={contact.email} href="mailto:l.bonnot@notaires.fr">l.bonnot@notaires.fr</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
