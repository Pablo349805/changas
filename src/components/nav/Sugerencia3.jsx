import './Nav.css'
import WhatsApp from '../img/WhatsApp.png'
import { useNavigate } from 'react-router-dom'
import Portada from '../img/portadaGasista.png'
import { useState } from 'react';
import Img1 from '../img/gustavo.png'
import Img2 from '../img/gustavo3.png'
import Img3 from '../img/gustavoP.png'
import Img4 from '../img/gustavo2.png'
import Img5 from '../img/carlosAyuda.png'
import Portadas2 from './Portadas2'
import Redes from '../Redes'

const data = [
  {
    image: Img1,
    title: 'Instalaciones y Montaje:',
    items: ['Colocación de cocinas, hornos, anafe, estufas de tiro balanceado y calderas.']
  },
  {
    image: Img2,
    title: 'Detección de Fugas:',
    items: ['Pruebas de hermeticidad con manómetro para localizar y sellar pérdidas con seguridad.']
  },
  {
    image: Img3,
    title: 'Servicio de Gasista Matriculado:',
    items: ['Gestión de trámites ante la prestataria, habilitaciones de medidores y presentación de planos.']
  },
  {
    image: Img4,
    title: 'Mantenimiento Preventivo:',
    items: ['Limpieza de quemadores, cambio de termocuplas y revisión de ventilaciones (rejillas de aire).']
  },
  {
    image: Img5,
    title: '"No dudes en contactarnos"',
    items: ['Presupuestos sin cargo.']
  }
];

const Sugerencia3 = () => {

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

export default Sugerencia3