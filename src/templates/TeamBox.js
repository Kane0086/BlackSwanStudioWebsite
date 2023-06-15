import { useState } from 'react';
import '../styles/TeamBox.css';
import { CSSTransition } from 'react-transition-group';

function TeamBox({ img, name, text }) {
  const [show, setShow] = useState(false);

  return (
    <div className="teambox-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className={`TeamBox ${show ? 'teambox-enter' : ''}`}>
        <div className='teambox-image-container'>
          <img className='teambox-image' src={img} alt="" />
        </div>
        <div className="teambox-name">
          <p>{name}</p>
        </div>
      </div>
      <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 500 }}>
        <div className="TeamBoxDescription">
          <p className="teambox-text">
            {text}
          </p>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TeamBox;
