import React, { useState, useEffect } from "react";

import navbar from '../styles/navbar.module.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavSite(props) {

  const INTRODUCTION_COMPONENT = 'Introduction.js';
  const CONTACT_COMPONENT = 'Contact.js';

  const [currentComponent, setCurrentComponent] = useState(INTRODUCTION_COMPONENT)
  const handleLinkClick = function(link){
    setCurrentComponent(link);
    props.handleLoadingNewComponent(link);
  }

  return(
    <Navbar collapseOnSelect expand="lg" variant="dark" className={currentComponent == INTRODUCTION_COMPONENT ? navbar.navbar : navbar.navbarBlue }>
      <div className={navbar.containerLogo}>
        <img className={navbar.logo} src={"/assets/icons/BLANC.png"}/>
        <div className={navbar.logoText}>
          <div className={navbar.title}>Lazslo <b className={navbar.name}>BONNOT</b></div>
          <div className={navbar.sousTitle}>NOTAIRE | CONSEILS </div>
        </div>
      </div>
      <Navbar.Toggle className={navbar.collapse} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={navbar.margin50Left}>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleLinkClick(INTRODUCTION_COMPONENT)}
               className={currentComponent == INTRODUCTION_COMPONENT ? navbar.nav + " " + navbar.active + " " + navbar.margin : navbar.nav + " " + navbar.margin}>
              <span>Notre étude</span>
            </Nav.Link>
            <Nav.Link onClick={() => handleLinkClick(CONTACT_COMPONENT)}
               className={currentComponent == CONTACT_COMPONENT ? navbar.nav + " " + navbar.active : navbar.nav }>
              <span>Nous contacter</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar >
  );
}
