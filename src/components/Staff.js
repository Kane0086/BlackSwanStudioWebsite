import "../styles/Staff.css"
import andrea from "../assets/team/andrea.png"
import paul from "../assets/team/paul.png"
import theo from "../assets/team/theo.jpg"
import abdoul from "../assets/team/abdoul.jpg"
import quentin from "../assets/team/Quentin.jpg"
import madeleine from "../assets/team/madelaine.jpg"
import l from "../assets/team/L.jpg"
import TeamBox from "../templates/TeamBox";
import eric from "../assets/team/eric.jpg"

function Staff() {
    return (
        <section className="Staff">
            <h1 className="staff-title">TEAM</h1>
            <div className="staff-container">
                <div className="staff-row">
                    <TeamBox img={andrea} name="POUPARD Andréa" text="Définit la stratégie et la vision globale du studio et veille à la réalisation des opérations quotidiennes."></TeamBox>
                    <TeamBox img={paul} name="LYNCH Paul" text="Définit la stratégie marketing globale et crée du contenu engageant."></TeamBox>
                    <TeamBox img={theo} name="RIVIERE Théo" text="Elabore les visuels des jeux et l'identité graphique du studio."></TeamBox>
                    <TeamBox img={quentin} name="CHARPENTIER Quentin" text="Travaille activement pour rendre l'expérience de jeu agréable."></TeamBox>
                    <TeamBox img={abdoul} name="GUERROUDJ Abdoul" text="Explore différentes perspectives pour enrichir et faire évoluer le gameplay."></TeamBox>
                    <TeamBox img={madeleine} name="PEILLON Madeleine" text="Musicienne de formation, créée l'identité musicale des jeux."></TeamBox>
                    <TeamBox img={eric} name="ORESKOVIC Eric" text='Directeur scénaristique "Je mets en place le scénario des jeux du studio".'></TeamBox>
                    <TeamBox img={l} name="BASSAGAL Louis" text="Passionné de développement de mécaniques de jeu immersives."></TeamBox>
                </div>
            </div>
        </section>
    )
}

export default Staff;