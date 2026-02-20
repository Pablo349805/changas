import './Nav.css'
import WhatsApp from '../img/WhatsApp.png'
import { useNavigate } from 'react-router-dom'
import Portada from '../img/portadaPlomero.png'
import { useState } from 'react';
import Img1 from '../img/willy2.png'
import Img2 from '../img/willy.png'
import Img3 from '../img/willyElectricista.png'
import Img4 from '../img/willyOptimista.png'
import Img5 from '../img/carlosAyuda.png'
import Portadas2 from './Portadas2'
import Redes from '../Redes'

const data = [
  {
    image: Img1,
    title: 'Urgencias y Filtraciones',
    items: ['Localización de fugas, reparaciones de cañerías (Termofusión, PVC, plomo) y humedad en paredes.']
  },
  {
    image: Img2,
    title: 'Instalaciones Sanitarias',
    items: ['Colocación de artefactos (inodoros, bidets), griferías de cocina/baño y cambio de mochilas.']
  },
  {
    image: Img3,
    title: 'Desobstrucciones',
    items: ['Destape de cañerías, limpieza de pluviales, piletas de cocina y cámaras de inspección.']
  },
  {
    image: Img4,
    title: 'Agua Caliente',
    items: ['Instalación y reparación de termotanques, calefones y bombas presurizadoras.']
  },
  {
    image: Img5,
    title: '"No dudes en contactarnos"',
    items: ['Presupuestos sin cargo.']
  }
];


const Sugerencia2 = () => {

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

export default Sugerencia2