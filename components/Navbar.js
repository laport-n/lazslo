import React, { useState, useEffect } from "react";

import navbar from '../styles/navbar.module.css';
import Link from 'next/link';

export default function NavSite(props) {

  const INTRODUCTION_COMPONENT = 'Introduction.js';
  const CONTACT_COMPONENT = 'Contact.js';

  const [currentComponent, setCurrentComponent] = useState(INTRODUCTION_COMPONENT)
  const handleLinkClick = function(link){
    setMenuIsOpen(!menuIsOpen)
    setCurrentComponent(link);
    props.handleLoadingNewComponent(link);
  }
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return(
    <div className={navbar.navbar}>
      <div className={navbar.containerLogo}>
        <img className={navbar.logo} alt="icon Maitre lazslo bonnot" src={"/assets/icons/BLANC.png"}/>
        <div className={navbar.logoText}>
          <div className={navbar.title}>Lazslo BONNOT</div>
          <div className={navbar.sousTitle}>NOTAIRE <div className={navbar.sepparation}></div> CONSEILS </div>
        </div>
      </div>

      <div className={navbar.nav} style={menuIsOpen ? {transform: 'translateY(0)', display: 'block'} : {transform: 'translateY(-100%)', display: 'none'}}>
        <div onClick={() => handleLinkClick(INTRODUCTION_COMPONENT)}
           className={currentComponent == INTRODUCTION_COMPONENT ? navbar.active + " " + navbar.margin + " " + navbar.item : navbar.margin + " " + navbar.item}>
          <span>Notre étude</span>
        </div>
        <div onClick={() => handleLinkClick(CONTACT_COMPONENT)}
           className={currentComponent == CONTACT_COMPONENT ? navbar.active + " " + navbar.item + " " + navbar.itemNavMarginTop : navbar.item + " " + navbar.itemNavMarginTop }>
          <span>Nous contacter</span>
        </div>
      </div>
      <div onClick={() => setMenuIsOpen(!menuIsOpen)} className={navbar.burgerContainer}>
        <div className={navbar.lineBurger} style={menuIsOpen ? {transform: 'rotate(45deg)'} : {transform: 'rotate(0deg)'}}/>
        <div className={navbar.lineBurger} style={menuIsOpen ? {backgroundColor: 'var(--orange-color)', opacity: '0', transform: 'translateX(20px)'} : {opacity: '1', transform: 'translateX(0)'}}/>
        <div className={navbar.lineBurger} style={menuIsOpen ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(0deg)'}}/>
      </div>
    </div>
  );
}
