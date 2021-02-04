import React from 'react';
import contactbar from '../styles/contactbar.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { TelephoneFill } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';

import Link from 'next/link'

export default function ContactUs(props){

  return (
    <div className={props.offset == 0 ? contactbar.contactFixed : contactbar.contact}>
        <a  className={contactbar.item} target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/712c+Cours+Cardinal+Bertrand+de+Montfavet,+84140+Avignon/@43.9295399,4.8726267,17z/data=!3m1!4b1!4m5!3m4!1s0x12b5ede999f99ecf:0xa765630d90730765!8m2!3d43.9295361!4d4.8748154">
          <span className={contactbar.label}>Adresse - Montfavet, Avignon</span>
          <div className={contactbar.containerIcon}>
            <GeoAltFill className={contactbar.icon} />
          </div>
        </a>
        <a  className={contactbar.item} href="tel:+33622281564">
          <span className={contactbar.label}>Téléphone - 06 22 28 15 64</span>
          <div className={contactbar.containerIconCenter}>
            <TelephoneFill className={contactbar.iconCenter}/>
          </div>
        </a>
        <a  className={contactbar.item} href="mailto:l.bonnot@notaires.fr?subject=Prise de rendez-vous">
          <span className={contactbar.label}>E-mail - l.bonnot@notaires.fr</span>
          <div className={contactbar.containerIcon}>
            <EnvelopeFill className={contactbar.icon} />
          </div>
        </a>
    </div>
  );
}
