import "../styles/Staff.css"
import StaffBox from "../templates/StaffBox";

function Staff() {
    return (
        <section className="Staff">
            <h1 className="staff-title">STAFF</h1>
            <div className="staff-container">
                <div className="staff-row">
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                </div>
                <div className="staff-row">
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                    <StaffBox name="Team Member" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat dignissim, scelerisque erat eu, posuere felis. Vivamus non nunc imperdiet, hendrerit urna at, posuere felis."/>
                </div>
            </div>
        </section>
    )
}

export default Staff;