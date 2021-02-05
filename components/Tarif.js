import tarif from '../styles/tarif.module.css';

export default function Tarif(){
  return (
    <div className={tarif.wrapper}>

      <div className={tarif.backgroundContent}>
        <div className={tarif.backgroundImage}></div>
      </div>

      <div className={tarif.container}>
        <div className={tarif.section}>
          <h1 className={tarif.title}>Tarifs</h1>
          <p className={tarif.text + " " + tarif.italicBold}>L'intégralité du tarif des notaires en vigueur, tel qu'il est fixé par les arrêtés des 26 février 2016, 28 octobre 2016 et 27 février 2018 est à votre disposition à l'accueil de l'étude, en consultation libre, sur simple demande.</p>

          <div className={tarif.marginTop40}>
            <h2 className={tarif.subTitle}>ÉMOLUMENTS</h2>
            <p className={tarif.text}><b>Les émoluments de rédaction</b> sont proportionnels à la valeur sur laquelle porte l'acte, leur montant et méthode de calcul sont fixés par la loi. Tous les clients payent la même chose pour les mêmes opérations (ventes, donations, ...). <br/><b>Les émoluments de formalités</b> sont fixes et correspondent aux demandes faites par le Notaire avant et après la signature.</p>
          </div>

          <div className={tarif.marginTop40}>
            <h2 className={tarif.subTitle}>HONORAIRES</h2>
            <p className={tarif.text + " " + tarif.marginBottomParagraph}><b>Article L 441-1 alinéa 3 du Code de commerce, Article annexe 4-9-I-4ème du Décret n°2016-230 du 26 février 2016 :</b></p>
            <p className={tarif.text + " " + tarif.marginTopParagraph}>
            Les honoraires s'appliquent aux actes pour lesquels il est prévu que la rémunération soit librement convenue entre le Notaire et son client.
            Le montant des honoraires s'appliquant aux actes ne faisant pas l'objet d'émoluments tarifiés est établi sur devis, en fonction des spécificités de chaque dossier.
            </p>
            <ul className={tarif.text + " " + tarif.ulstyle}>
              <li className={tarif.liStyle}>Des baux non tarifiés</li>
              <li className={tarif.liStyle}>Des cessions de fonds de commerce</li>
              <li className={tarif.liStyle}>Des statuts de société (avec ou sans apport d'immeuble)</li>
              <li className={tarif.liStyle}>Des dépôts de testaments</li>
              <li className={tarif.liStyle}>Des dépôts de pièces</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
