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
