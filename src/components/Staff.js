import "../styles/Staff.css"
import andrea from "../assets/team/andrea.png"
import paul from "../assets/team/paul.png"
import theo from "../assets/team/theo.jpg"
import antoine from "../assets/team/antoine.png"
import TeamBox from "../templates/TeamBox";

function Staff() {
    return (
        <section className="Staff">
            <h1 className="staff-title">TEAM</h1>
            <div className="staff-container">
                <div className="staff-row">
                    <TeamBox img={andrea} name="POUPARD Andréa" text="Responsable de la direction stratégique de l'entreprise et de la prise de décisions importantes."></TeamBox>
                    <TeamBox img={paul} name="LYNCH Paul" text="Définit la stratégie marketing globale et crée du contenu engageant."></TeamBox>
                    <TeamBox img={theo} name="RIVIERE Théo" text={"Elabore les visuels des jeux et l'identité graphique du studio."}></TeamBox>
                    <TeamBox img={antoine} name="BERSON Antoine" text="Responsable communication."></TeamBox>
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                </div>
            </div>
        </section>
    )
}

export default Staff;