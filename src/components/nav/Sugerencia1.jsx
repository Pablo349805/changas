import './Nav.css'
import WhatsApp from '../img/WhatsApp.png'
import { useNavigate } from 'react-router-dom'
import Portada from '../img/portadaElectricidad.png'
import Cabeza from '../img/willyCabeza2.png'
import { useState } from 'react';
import Img1 from '../img/Leo.png'
import Img2 from '../img/leo3.png'
import Img3 from '../img/carlosAyuda.png'
import Portadas2 from './Portadas2'
import Redes from '../Redes'

const data = [
  {
    image: Img1,
    title: 'Instalaciones: Tableros, luminarias, ventiladores de techo.',
    items: ['Personal Matriculado.']
  },
  {
    image: Img2,
    title: 'Mantenimiento: Revisión de cableado, cambio de térmicas y disyuntores.',
    items: ['Limpieza: "Dejamos todo como estaba" .']
  },
  {
    image: Img3,
    title: 'No dudes en contactarnos"',
    items: ['Presupuestos sin cargo.']
  }
];


const Sugerencia1 = () => {



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
          <img src={Cabeza} alt="Logo" className="nav-logo2" />
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

export default Sugerencia1