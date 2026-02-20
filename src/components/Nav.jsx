import LogoUbi from "./img/ubicacion.png"
import { useNavigate } from 'react-router-dom'
import WhatsApp from '../components/img/WhatsApp.png'
import Cabeza from './img/willyCabeza2.png'

const Nav = () => {
    const navigation = useNavigate()

    const SobreNosotros = () => {
        navigation('/nosotros')
    }

    return (
        <nav className="navbar">
            <div className="nav-left">
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

        

    )
}

export default Nav