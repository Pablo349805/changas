import Facebook from './img/facebook.png'
import Instagram from './img/instagram.png'
import TikTok from './img/tiktok.png'
import WhatsApp from './img/WhatsApp.png'

const iconos = () => {


    return (
        <footer className="footer">

            <div className="footer-column">
                <h4>Compañía</h4>
                <ul>
                    <li >Sobre nosotros</li>
                    <li>Profesiones</li>
                </ul>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="https://www.facebook.com/Changas3498" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.tiktok.com/@changaslujan?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                        <img src={TikTok} alt="TikTok" />
                    </a>
                    <a href="https://www.instagram.com/changas3498/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://wa.me/542615887735?text=Hola%20quiero%20informacion
" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                </div>
                <div className="footer-meta">
                    <span>Español (Internacional)</span>
                    <span>Mendoza</span>
                </div>
            </div>
        </footer>
    );
};


export default iconos