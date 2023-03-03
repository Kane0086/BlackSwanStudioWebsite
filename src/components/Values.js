import '../styles/Values.css';
import anime from "animejs/lib/anime.es"
import rocket from "../assets/img/rocket.svg"


function Values() {
  return (
    <section className="Values">
      <div className="value-container">
        <div className="value-illustration">
          <div className="value-bubble">
            <img className='value-img' src={rocket} alt='rocket'/>
          </div>
        </div>
        <div className="value-text">
          <div className="value-text-container">
            <div>
              <h1 className='value-title'>Lorem ipsum</h1>
              <p className='value-paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est ultrices, ultricies eros varius,
                aliquam turpis. Sed lorem orci, tristique lobortis sagittis quis, pellentesque sit amet mi. Suspendisse
                vitae commodo metus, in pretium augue. Nullam vestibulum arcu vel est vestibulum mollis. Sed in tellus
                neque. Aliquam non tempus libero. Aenean in nibh eu ex commodo molestie vel quis ante. Nunc at
                condimentum sem, quis posuere felis. Fusce sollicitudin faucibus justo a tincidunt. Proin lacinia
                laoreet orci eu condimentum. Vestibulum sit amet elementum quam. Aenean a egestas massa. Mauris aliquam,
                velit ut maximus facilisis, quam eros ultricies sem, id laoreet enim velit non mi. Integer ullamcorper
                sit amet dui vitae elementum.
              </p>
              <p className='value-paragraph'>
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum arcu
                eu suscipit sagittis. Curabitur dictum scelerisque velit, nec faucibus nisi gravida aliquet. Sed at
                pretium dui, pellentesque finibus magna. Sed eu velit quis ex mollis tincidunt ac sit amet diam. Proin
                posuere risus tellus, id auctor libero ullamcorper in. Nulla ut magna et orci molestie porttitor eget eu
                urna. Integer eget risus facilisis, venenatis ipsum sit amet, efficitur arcu. Aliquam fermentum eu orci
                a pretium. Duis sollicitudin bibendum sagittis.
              </p>
              <p className='value-paragraph'>
                Integer nisi augue, fermentum a tellus eu, sagittis pharetra quam. Cras et iaculis augue. Maecenas
                suscipit eget tellus sit amet dapibus. Praesent mi nisl, dictum ut bibendum nec, fermentum sit amet
                augue. Maecenas felis purus, ultricies eu interdum id, lacinia id ante. Aliquam a neque pulvinar,
                vestibulum tellus nec, ultrices velit. Proin risus ipsum, cursus a metus nec, varius aliquet dui.
                Aliquam accumsan, justo quis fringilla ullamcorper, orci nisl interdum augue, vitae facilisis libero
                tortor et lectus. Nulla blandit vehicula elementum. Mauris luctus ac quam non fermentum. Ut quis sem non
                tortor dignissim suscipit. Curabitur non diam at dolor ullamcorper blandit non ac tortor. Nullam eget
                est arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam rhoncus, augue in consectetur iaculis, augue ante lobortis lorem, a scelerisque purus sapien id
                felis. Nulla metus eros, molestie aliquam scelerisque quis, condimentum sed lorem. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Mauris sapien elit, maximus id tincidunt quis, lobortis ac erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
