import ContactBar from './ContactBar.js';
import presentation from '../styles/presentation.module.css';

export default function Presentation(){
  return (
    <div className={presentation.container}>
      <div>

        <div className={presentation.welcomeContainer}>
          <h3 className={presentation.marginBetweenTitle + " " + presentation.welcomeText}>Bienvenue à l'étude de </h3>
          <h2 className={presentation.marginBetweenTitle + " " + presentation.welcomeTitle}>Maître Lazslo BONNOT</h2>
        </div>

        <div className={presentation.sectionLeft}>
          <div className={presentation.containerDoubleCard}>
            <div className={presentation.left}>
            </div>
            <div className={presentation.right}>
              <div className={presentation.wrapper}>
                <h1 className={presentation.title}>
                  Office Notarial
                </h1>
                <p className={presentation.text} ><b>Maître Lazslo BONNOT</b> vous accueille au sein de son Office Notarial situé à : MONTFAVET (AVIGNON-Vaucluse), 712 C, cours Cardinal Bertrand et vous conseille dans les domaines suivants :</p>
                <ul className={presentation.text + " " + presentation.ulstyle}>
                  <li className={presentation.liStyle}><b>Droit immobilier</b> (achat, vente, copropriété, lotissement, servitude, prêt, bail...)</li>
                  <li className={presentation.liStyle}><b>Droit de la famille</b> (succession, donation, contrat de mariage, divorce, PACS, donation entre époux au dernier vivant, testament, partage, adoption, changement de régime matrimonial...)</li>
                  <li className={presentation.liStyle}><b>Droit des affaires</b> (constitution de sociétés, cession de parts, vente de fonds de commerce, baux commerciaux...)</li>
                  <li className={presentation.liStyle}><b>Droit rural</b></li>
                </ul>
                <p className={presentation.text}><b>Sur rendez-vous du lundi au vendredi de 9h à 18h et le samedi de 9h à 12h.</b> Etant ici précisé que les rendez-vous de conseils sont gratuits.</p>
                <p className={presentation.text}>L’étude est équipée des dernières technologies numériques (signature électronique, visioconférence) afin de rendre toujours plus efficace et agréable le suivi de votre affaire.</p>
                <p className={presentation.text}>L'office dispose d'un <b>parking gratuit.</b></p>
              </div>
            </div>
          </div>
        </div>

        <div className={presentation.sectionNotaire}>
          <div className={presentation.blockquote}>
            <h2 className={presentation.titleCitation}>Note de mon Notaire</h2>
            <p className={presentation.text + " " + presentation.textCenter}>
              <b className={presentation.citation}>"</b>A côté des fonctionnaires qui concilient et qui jugent les différends, la tranquillité appelle d'autres fonctionnaires, qui, conseils désintéressés des parties, aussi bien que rédacteurs impartiaux de leur volonté, leur faisant connaître toute l'étendue des obligations qu'elles contractent, rédigeant ces engagements avec clarté, leur donnant le caractère d'un acte authentique et la force d'un jugement en dernier ressort, perpétuant leur souvenir et conservant leur dépôt avec fidélité, empêchent les différends de naître entre les hommes de bonne foi et enlèvent aux hommes cupides avec l'espoir du succès, l'envie d'élever une injuste contestation.
              <br/>Ces conseils désintéressés, ces rédacteurs impartiaux, cette espèce de juges volontaires qui obligent irrévocablement les parties contractantes, sont les notaires. Cette institution est le notariat.<b className={presentation.citation}>"</b>
            </p>
          </div>
        </div>

        <div className={presentation.sectionLeft}>
          <div className={presentation.containerDoubleCard}>
            <div className={presentation.leftValue}>
              <div className={presentation.wrapperValue + " " + presentation.text}>
                <h1 className={presentation.title}>Nos valeurs</h1>
                <p className={presentation.text}>
                  <b>Maître Lazslo BONNOT</b> est profondément attaché au respect des valeurs qui fondent la profession de Notaire :
                </p>
                <ul className={presentation.text + " " + presentation.ulstyle}>
                  <li className={presentation.liStyle}>Service public</li>
                  <li className={presentation.liStyle}>Probité</li>
                  <li className={presentation.liStyle}>Conseil</li>
                  <li className={presentation.liStyle}>Impartialité</li>
                  <li className={presentation.liStyle}>Compétence</li>
                  <li className={presentation.liStyle}>Pluridisciplinarité</li>
                  <li className={presentation.liStyle}>Respect du secret professionnel</li>
                </ul>
                <p className={presentation.text}>
                  <b>Le client est au cœur du projet d’entreprise de l’Étude.</b> À ce titre, nous nous adaptons à chacune de vos attentes et portons une attention toute particulière sur votre situation personnelle et vos projets, afin d’apporter une réponse pertinente à l’ensemble de vos besoins.
                </p>
                <p className={presentation.text}>
                  Nous avons conscience de l'évoultion de notre société et <b>nous mettons tous nos moyens et toute notre énergie pour répondre à la recherche toujours plus grande de réactivité.</b>
                </p>
              </div>
            </div>
            <div className={presentation.rightValue}>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
