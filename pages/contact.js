import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import Head from 'next/head';

import Navbar  from '../components/Navbar.js';
import Contact from '../components/Contact.js';

export default function Index(props) {

  return (
    <div>
      <Navbar />
      <Contact />
    </div>
  )
}
