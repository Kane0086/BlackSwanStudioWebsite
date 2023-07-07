import '../styles/Footer.css';
import twitter from '../assets/logo/twitter.svg';
import instagram from '../assets/logo/instagram.svg';
import linkedin from '../assets/logo/linkedin.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <section className="Footer">
      <div className="social-container">
        <h1>Nous suivre</h1>
        <div className="logo-container">
          <button className="social-button">
            <img className="social-logo" src={twitter} alt="Twitter" />
          </button>
          <button className="social-button">
            <img className="social-logo" src={instagram} alt="Instagram" />
          </button>
          <button className="social-button">
            <img onClick={() => window.open("https://www.linkedin.com/company/turtles-on-fire/?originalSubdomain=fr", "_blank")} className="social-logo" src={linkedin} alt="LinkedIn" />
          </button>
        </div>
      </div>
      <div className='vl-footer'></div>
      <div className="footer-text-container">
        <p className="footer-text">Contact</p>
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
