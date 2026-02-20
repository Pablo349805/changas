import Portadas from './Portadas'
import { useState } from 'react';

import Img1 from './img/willy.png'
import Img2 from './img/carlosContento.png'
import Img3 from './img/carlosPreocupado.png'

const data = [
  {
    image: Img1,
    title: 'Changas',
    items: ['Contactanos']
  },
  {
    image: Img3,
    title: 'Solucionamos Todos tus problemas de Hogar',
    items: [ 'No lo dudes']
  },
  {
    image: Img2,
    title: 'Te reparamos "Todo"',
    items: [ 'De forma profesional y responsable']
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);

  return (
    <div className="carousel-wrapper">
      <button onClick={prev} className="carousel-button">‹</button>
      <div className="carousel-slide">
        <Portadas {...data[index]} />
      </div>
      <button onClick={next} className="carousel-button">›</button>
    </div>
  );
};


export default Carousel;