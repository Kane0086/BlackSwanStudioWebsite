import './../styles/Games.css';
import celeste from '../assets/img/Coronite.png';
// import GameBox from '../templates/GameBox';
// import persona5 from '../assets/img/p5.jpg';
// import yakuza from '../assets/img/yakuza.jpg';
// import ffxv from '../assets/img/ffxv.jpg';
// import ffvii from '../assets/img/ffvii.webp';

function Games() {
  return (
    <section className="Games">
      <h1 className="title">GAMES</h1>
      <div className="main-game-container">
        <div className="image-container">
          <img className="game-image" src={celeste} alt="main-game" />
        </div>
        <div className="main-game-text">
          <h1>Coronite</h1>
          <p>
            "Coronite" est un jeu de type Battle Royale unique où vous incarnez un virus luttant pour sa survie.
            Affrontez d'autres virus infectieux, infectez des cellules, évitez les anticorps et utilisez des stratégies
            astucieuses pour devenir le virus le plus résistant et survivre le plus longtemps possible. Plongez dans un
            monde infecté, évoluez et éliminez vos adversaires pour dominer le jeu. Prêt à relever le défi viral de
            "Coronite" ?
          </p>
          <div className="button-container">
            <button className="go-button">
              GO
            </button>
          </div>
        </div>
      </div>
      <div className="sub-game-container">
        {/* <GameBox img={ffvii} alt="Final Fantasy VII Remake" />
        <GameBox img={persona5} alt="Persona 5R" />
        <GameBox img={ffxv} alt="Final Fantasy XV" />
        <GameBox img={yakuza} alt="yakuza" /> */}
      </div>
    </section>
  );
}

export default Games;
