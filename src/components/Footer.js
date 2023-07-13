import '../styles/Footer.css';
import linkedin from '../assets/logo/linkedin.svg';
import '../styles/Footer.css';
import Modal from '../templates/Modal';
import { useState } from 'react';

function Footer() {
  const [show, setShow] = useState(false);

  return (
    <section className="Footer">
      <div className="social-container">
        <h1>Nous suivre</h1>
        <div className="logo-container">
          <button className="social-button">
            <img
              onClick={() =>
                window.open('https://www.linkedin.com/company/turtles-on-fire/?originalSubdomain=fr', '_blank')
              }
              className="social-logo"
              src={linkedin}
              alt="LinkedIn"
            />
          </button>
        </div>
      </div>
      <div className="vl-footer"></div>
      <div className="footer-text-container">
        <p
          className="footer-text"
          onClick={() => {
            setShow(true);
          }}
        >
          Contact
          <Modal
            onClose={() => setShow(false)}
            show={show}
            header={'Contact'}
            text={'Email : contact@turtlesonfire.com'}
          />
        </p>
        <div className="vl-footer"></div>
        <p className="footer-text">Mentions légales</p>
        <div className="vl-footer"></div>
        <p className="footer-text">C.G.U</p>
        <div className="vl-footer"></div>
        <p className="footer-text">Cookies</p>
      </div>
    </section>
  );
}

export default Footer;
