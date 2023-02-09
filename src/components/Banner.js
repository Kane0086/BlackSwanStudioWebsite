import './../styles/Banner.css';
import BusterSword from '../assets/img/ff7r.jpg';

function Banner() {
  return (
    <section className="Banner">
      <div className="big-banner">
        <img className="image" src={BusterSword} alt="BusterSword" />
        <div className="image-filter"></div>
        <div className="dot-container">
          <li>
            <ul>
              <div className="unchecked-dot">
                <div className="checked"></div>
              </div>
            </ul>
            <ul>
              <div className="unchecked-dot"></div>
            </ul>
            <ul>
              <div className="unchecked-dot"></div>
            </ul>
            <ul>
              <div className="unchecked-dot"></div>
            </ul>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Banner;
