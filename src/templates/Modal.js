import React from 'react';
import '../styles/Modal.css';
import { CSSTransition } from 'react-transition-group';

function Modal(props, {header, text }) {
  return (
    <CSSTransition in={props.show} unmountOnExit timeout={{ enter: 0, exit: 500 }}>
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h1>Contact</h1>
          </div>
          <div className="modal-body">
            <p>Email : contact@turtlesonfire.com</p>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="modal-close">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
