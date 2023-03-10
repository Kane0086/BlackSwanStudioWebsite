import { useState } from 'react';
import './../styles/NewsBox.css';
import Modal from './Modal';

function NewsBox() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(true)} className="news-box-container">
        <div className="box-text">
          <h1 className="box-title"> News Title</h1>
          <p className="box-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
}

export default NewsBox;
