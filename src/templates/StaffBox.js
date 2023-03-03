import "../styles/StaffBox.css"

function StaffBox({img, name, text}) {
    return (
        <div className="staffbox">
            <div className="staffbox-image-container">
                <img className="staff-img" src={img} alt=""/>
            </div>
            <div className="staffbox-text-container">
                <h1 className="staff-name">{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default StaffBox;