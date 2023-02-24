import React, { useRef, useState } from 'react';

import '../styles/Carousel.css';
import { useEffect } from 'react';

export const CarouselItem = ({ width, img }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className='image' src={img} alt='BlackSwanStudioGames'></img>
        <div className="image-filter"></div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  var index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0)
        newIndex = React.Children.count(children) - 1;
    else if (newIndex >= React.Children.count(children))
        newIndex = 0;
    index.current = newIndex;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="dot-container">
          <li>
            <ul>
              <div className="unchecked-dot" onClick={() => {updateIndex(0)}}>
                <div className={index.current === 0 ? "checked" : ""}></div>
              </div>
            </ul>
            <ul>
              <div className="unchecked-dot" onClick={() => {updateIndex(1)}}>
              <div className={index.current === 1 ? "checked" : ""}></div>
              </div>
            </ul>
            <ul>
              <div className="unchecked-dot" onClick={() => {updateIndex(2)}}>
              <div className={index.current === 2 ? "checked" : ""}></div>
              </div>
            </ul>
          </li>
        </div>
    </div>
  );
};

export default Carousel;
