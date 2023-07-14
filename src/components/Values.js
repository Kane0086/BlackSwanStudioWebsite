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
              <h1 className="value-title">Turtles on Fire : Une petite équipe avec de grandes ambitions</h1>
              <p className="value-paragraph">
                Chez Turtles on Fire, on a commencé à six à faire des jeux ensemble, un peu pour le fun, mais surtout
                guidé par la curiosité de voir à quoi ressemble les coulisses de création de notre média préféré. Et,
                sans surprise, on a été conquis par cette expérience. C’est pour cela qu’aujourd’hui, on a décidé de
                voir plus grand et de se lancer dans la production de jeux vidéo de manière professionnelle ! Bien que
                l'on n'ait pas l’expérience, les compétences et les ressources pour y arriver facilement, c’est tout
                l’enjeu de cette aventure :
                <li className="value-list">
                  <ul>Progresser dans la création de jeux</ul>
                  <ul>Se développer par nos propres moyens</ul>
                  <ul>Inclure notre communauté dans notre développement</ul>
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
