import './../styles/Games.css';
import celeste from '../assets/img/Coronite.png';
import GameBox from '../templates/GameBox';
import UmamiIsland from '../assets/img/UmamiIsland.png';

function Games() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

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
            <button className="go-button" onClick={() => openInNewTab('https://turtles-on-fire.itch.io/coronite')}>
              GO
            </button>
          </div>
        </div>
      </div>
      <div className="sub-game-container">
        <GameBox img={UmamiIsland} alt="Final Fantasy VII Remake" />
      </div>
    </section>
  );
}

export default Games;
