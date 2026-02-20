import Electricista from "./img/leo2.png"
import Plomero from "./img/willyPlomero.png"
import Constructor from "./img/cholo2.png"
import Gasista from "./img/gustavo3.png"
import { useNavigate } from 'react-router-dom'

const Sugerencias = () => {

  const navigation = useNavigate()

  const Sugerencias1 = () => {
    navigation('/sug1')
  }

  const Sugerencias2 = () => {
    navigation('/sug2')
  }

  const Sugerencias3 = () => {
    navigation('/sug3')
  }

  const Sugerencias4 = () => {
    navigation('/sug4')
  }
  const services = [
    {
      id: 1,
      title: "Servicios de Electricidad",
      image: Electricista,
    },
    {
      id: 2,
      title: "Servicios de Plomería",
      image: Plomero,
    },

    {
      id: 3,
      title: "Servicios de Gasista",
      image: Gasista,
    },
    {
      id: 4,
      title: "Servicios de Construccion",
      image: Constructor,
    },
  ];

  return (
    <div className="suggestions-carousel">
      <h2>Servicios</h2>
      <div className="carousel-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <button
              className="service-button"
              onClick={() => {
                console.log(`Sugerencias${service.id}`);
                navigation(`/sug${service.id}`);
              }}

            >
              Detalles
            </button>

          </div>

        ))}
      </div>
    </div>

  )
}

export default Sugerencias