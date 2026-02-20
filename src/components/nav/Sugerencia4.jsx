import './Nav.css'
import WhatsApp from '../img/WhatsApp.png'
import { useNavigate } from 'react-router-dom'
import Portada from '../img/portadaConstruccion.png'
import { useState } from 'react';
import Img1 from '../img/cholo.png'
import Img2 from '../img/cholo2.png'
import Img3 from '../img/cholo3.png'
import Img4 from '../img/cholo4.png'
import Img5 from '../img/carlosAyuda.png'
import Portadas2 from './Portadas2'
import Redes from '../Redes'

const data = [
  {
    image: Img1,
    title: 'Albañilería y Terminaciones',
    items: ['Revoques, carpetas, colocación de pisos (cerámicos, porcelanatos) y revestimientos de paredes.']
  },
  {
    image: Img2,
    title: 'Construcción en Seco',
    items: ['Tabiques de Durlock, cielorrasos suspendidos, estantes y divisiones de ambientes rápidas y limpias.']
  },
  {
    image: Img3,
    title: 'Humedad y Aislamiento',
    items: ['Tratamiento de humedad de cimientos, impermeabilización de techos, terrazas y aplicación de membranas.']
  },
  {
    image: Img4,
    title: 'Pintura e Impermeabilización',
    items: ['Pintura de interiores, exteriores, aberturas y aplicación de revestimientos plásticos']
  },
  {
    image: Img5,
    title: '"No dudes en contactarnos"',
    items: ['Presupuestos sin cargo.']
  }
];

const Sugerencia4 = () => {

  const navigation = useNavigate()

  const Home = () => {
    navigation('/')
  }

 const SobreNosotros = () => {
    navigation('/nosotros')
  }

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);

  return (
    <div className='body'>
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button" onClick={Home}>Inicio</button>
          <button className="nav-button" onClick={SobreNosotros}>Sobre Nosotros</button>
        </div>
        <div className="nav-right">
          <a href="https://wa.me/542615887735?text=Hola%20quiero%20informacion
">
            <img src={WhatsApp} alt="Logo" className="nav-logo" />
          </a>
        </div>
      </nav>

      <section className="portada">
        <img
          src={Portada}
          alt="Electricista retro preparando herramientas"
          className="portada-img"
        />
      </section>

      <div className="carousel-wrapper">
        <button onClick={prev} className="carousel-button">‹</button>
        <div className="carousel-slide">
          <Portadas2 {...data[index]} />
        </div>
        <button onClick={next} className="carousel-button">›</button>
      </div>

      <Redes />

    </div>
  )
}

export default Sugerencia4