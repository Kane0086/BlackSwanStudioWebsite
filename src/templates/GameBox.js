import './../styles/GameBox.css';

function GameBox({ img, alt }) {
  return (
    <div className="gamebox-container">
      <div className="gamebox-image-container">
        <img className="gamebox-image" src={img} alt={alt} />
      </div>
    </div>
  );
}

export default GameBox;
