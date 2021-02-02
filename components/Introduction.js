import React, { useEffect, useState } from 'react';

import introduction from '../styles/introduction.module.css';

import presentation from '../styles/presentation.module.css';
import ContactBar from './ContactBar.js';
import Presentation from './Presentation.js';
import Tarif from './Tarif.js';

export default function Introduction(){
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  return (
    <div className={introduction.container}>
      <ContactBar offset={offset} />

      <div className={introduction.backgroundContent}>
        <div className={introduction.backgroundImage}></div>

        <div className={introduction.indexTitle}>
          <div className={introduction.maxWidthContainer}>
            <h1 className={introduction.indexTitleText + " " + introduction.noMarginBottom}>Lazslo Bonnot</h1>
            <h1 className={introduction.indexSousTitleText + " " + introduction.noMarginTop  + " " + introduction.noMarginBottom}>Notaire | Conseils</h1>
            <h2 className={introduction.indexIntroductionTitle +  " " + introduction.noMarginTop}>Accompagner et conseiller nos clients à chaque étape clé de leur vie personnelle et professionnelle, tel est le cœur de notre métier.</h2>
          </div>

        </div>
      </div>

      <Presentation />
      <Tarif />
      </div>
  );
}
