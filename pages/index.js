import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import Navbar  from '../components/Navbar.js';
import ContactBar from '../components/ContactBar.js';
import Introduction from '../components/Introduction.js';
import Head from '../components/Head.js';

export default function Index(props) {

  const [CurrentComponent, setCurrentComponent] = useState(() => {
    const component =  dynamic(() => import('../components/Introduction.js')
    .then(component => {
      return component
    })
    .catch(error => console.log(error)),
    );
    return component;
  });

  const handleLoadingNewComponent = function(linkClicked){
    setCurrentComponent(dynamic(() => import('../components/' + linkClicked)
      .then(component => {
        return component
      })
      .catch(error => {
        return error;
      })
    ));
  }

  return (
    <div>
      <Head />
      <Navbar handleLoadingNewComponent={handleLoadingNewComponent}/>
      <CurrentComponent />
    </div>
  )
}
