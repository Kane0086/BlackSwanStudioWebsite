import './../styles/App.css';
import Carousel, { CarouselItem } from './Carousel';
import Header from './Header';
import News from './News';
import Values from './Values';
import Coronite from '../assets/img/Coronite.png';
import Clive from '../assets/img/ff16.jpg';
import Nier from '../assets/img/automata.jpg';
import Games from './Games';
import Staff from './Staff';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Carousel>
        <CarouselItem img={Coronite}> </CarouselItem>
        <CarouselItem img={Clive}>Item 2</CarouselItem>
        <CarouselItem img={Nier}>Item 3</CarouselItem>
      </Carousel>
      <News />
      <Games />
      <Values />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
