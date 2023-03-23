import "../styles/Staff.css"
import TeamBox from "../templates/TeamBox";

function Staff() {
    return (
        <section className="Staff">
            <h1 className="staff-title">STAFF</h1>
            <div className="staff-container">
                <div className="staff-row">
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                </div>
                <div className="staff-row">
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                    <TeamBox></TeamBox>
                </div>
            </div>
        </section>
    )
}

export default Staff;