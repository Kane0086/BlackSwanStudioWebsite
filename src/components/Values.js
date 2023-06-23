import '../styles/Values.css';
import rocket from '../assets/img/rocket.svg';

function Values() {
  return (
    <section className="Values">
      <div className="value-container">
        <div className="value-bubble-container">
          <div className="value-bubble">
            <img className="value-img" src={rocket} alt="rocket" />
          </div>
        </div>
        <div className="value-text">
          <div className="value-text-container">
            <div>
              <h1 className="value-title">
                Turtles on Fire : L'excellence, le respect et la passion au cœur de notre création de jeux
              </h1>
              <p className="value-paragraph">
                Dans le studio de développement de jeux vidéo Turtles on Fire, nous embrassons avec ferveur les valeurs
                de la perfection, du respect des développeurs et de la sortie de jeux de qualité. Notre équipe est
                animée par une passion inextinguible pour l'art du jeu vidéo et par la volonté constante de repousser
                les frontières de l'excellence.
                <li className='value-list'>
                  <ul>
                    Nous croyons fermement que chaque jeu que nous créons doit refléter notre quête incessante de la
                    perfection. Chaque pixel, chaque ligne de code et chaque aspect du gameplay est méticuleusement
                    conçu et poli pour offrir une expérience immersive et captivante aux joueurs du monde entier.
                  </ul>
                  <ul>
                    Au sein de notre studio, le respect des développeurs est une priorité absolue. Nous considérons
                    notre équipe comme notre plus grand atout et nous nous engageons à créer un environnement de travail
                    où chacun se sent valorisé, écouté et soutenu. Nous encourageons la collaboration, la créativité et
                    l'épanouissement personnel, car nous croyons que c'est ainsi que naissent les jeux exceptionnels.
                  </ul>
                  <ul>
                    Enfin, notre engagement envers la sortie de bons jeux est ancré dans notre ADN. Nous mettons tout en
                    œuvre pour offrir des expériences ludiques de qualité supérieure, en veillant à ce que chaque jeu
                    réponde aux attentes élevées de notre communauté de joueurs. Nous nous efforçons de capturer
                    l'imagination, de raconter des histoires mémorables et de procurer des moments de divertissement
                    inoubliables.
                  </ul>
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
