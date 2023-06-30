import './../styles/App.css';
import Carousel, { CarouselItem } from './Carousel';
import Header from './Header';
import Values from './Values';
import Coronite from '../assets/img/Coronite.png';
import Games from './Games';
import Staff from './Staff';
import Footer from './Footer';
import Sanglielle from '../assets/img/Sanglielle.jpg'

function App() {
  return (
    <div>
      <Header />
      <Carousel>
        <CarouselItem img={Coronite}> </CarouselItem>
        <CarouselItem img={Sanglielle}> </CarouselItem>
      </Carousel>
      {/* <News /> */}
      <Games />
      <Values />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
