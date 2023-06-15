import '../styles/Values.css';
import rocket from "../assets/img/rocket.svg"


function Values() {
  return (
    <section className="Values">
      <div className="value-container">
        <div className='value-bubble-container'>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
