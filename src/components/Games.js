import './../styles/Games.css';
import celeste from '../assets/img/celeste.jpg';
import GameBox from '../templates/GameBox';
import persona5 from '../assets/img/p5.jpg';
import yakuza from '../assets/img/yakuza.jpg';
import ffxv from '../assets/img/ffxv.jpg';
import ffvii from '../assets/img/ffvii.webp';

function Games() {
  return (
    <section className="Games">
      <h1 className="title">GAMES</h1>
      <div className="main-game-container">
        <div className="image-container">
          <img className="game-image" src={celeste} alt="main-game" />
        </div>
        <div className="main-game-text">
          <h1>Celeste</h1>
          <p>
            Celeste est un jeu vidéo de plateforme indépendant en deux dimensions développé et édité par Extremely OK
            Gamesa, un studio canadien dirigé par Maddy Thorson et Noel Berry. Issu d'un prototype éponyme développé en
            août 2015 lors d'une game jam sur la fantasy console PICO-8, il est finalement publié sur Microsoft Windows,
            macOS, Linux, PlayStation 4, Nintendo Switch et Xbox One le 25 janvier 2018, puis sur Google Stadia le 28
            juillet de la même année.
          </p>
          <p>
            Dans Celeste, le joueur incarne Madeline, une jeune femme qui tente de gravir le mont Celeste. Au cours de
            son ascension, il est révélé qu'elle souffre d'une sévère forme d'anxiété et de dépression, impliquant
            qu'elle doit affronter ses angoisses et son mal-être intérieur pour parvenir au sommet de la montagne. Le
            jeu est composé de huit chapitres ainsi que d'un DLC gratuit intitulé Farewell, sorti le 9 septembre 2019,
            qui clôt définitivement l'histoire. Le gameplay du jeu consiste en une suite d'écrans présentant un
            assemblage complexe et cohérent d'obstacles qui demandent à la fois de la stratégie, de la précision et un
            bon temps de réaction de la part du joueur pour être surmontés. Jugé exigeant et souvent comparé à des jeux
            comme Super Meat Boy, Celeste inclut néanmoins des paramètres pour ajuster la difficulté et reste vu comme
            moins punitif que les autres jeux du genre.
          </p>
          <div className="button-container">
            <button className="go-button">GO</button>
          </div>
        </div>
      </div>
      <div className="sub-game-container">
        <GameBox img={ffvii} alt="Final Fantasy VII Remake" />
        <GameBox img={persona5} alt="Persona 5R" />
        <GameBox img={ffxv} alt="Final Fantasy XV" />
        <GameBox img={yakuza} alt="yakuza" />
      </div>
    </section>
  );
}

export default Games;
