import Head from 'next/head'
import contact from '../styles/contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div className={contact.container}>
        <div className={contact.leftContainer}>
          <div className={contact.formulaireContainer}>

            <p>Les champs marqués d'un astérisques ( <b className={contact.asterix}>*</b> ) sont obligatoires.</p>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre nom <b className={contact.asterix}>*</b></span>
              <input className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre email <b className={contact.asterix}>*</b></span>
              <input className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Sujet du contact <b className={contact.asterix}>*</b></span>
              <input className={contact.input} type="text" name="name" />
            </div>

            <div className={contact.formInput}>
              <span className={contact.labelInput}>Votre message <b className={contact.asterix}>*</b></span>
              <textarea rows="10" className={contact.input} />
            </div>

            <div className={contact.containerButton}>
              <a className={contact.callToAction}>Envoyer</a>
            </div>

          </div>
        </div>
        <div className={contact.rightContainer}>
          <div className={contact.informationContainer}>

            <div className={contact.logoContainer}>
              <img className={contact.logo} src={"/assets/icons/BLEU.png"}/>
            </div>
            <div className={contact.logoText}>
              <div className={contact.title}>Lazslo <b className={contact.name}>BONNOT</b></div>
              <div className={contact.sousTitle}>NOTAIRE | CONSEILS </div>
            </div>

            <div className={contact.informations}>
              <p className={contact.informationsLibelle}>Adresse</p>
              <span>712 cours Cardinal Bertrand 84140, Montfavet.</span>

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
