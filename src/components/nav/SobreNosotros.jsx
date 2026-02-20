import React from 'react'
import './Nav.css'
import WhatsApp from '../img/WhatsApp.png'
import { useNavigate } from 'react-router-dom'

const Contacto = () => {

  const navigation = useNavigate()

  const Home = () => {
    navigation('/')
  }

  return (

    <div className='body'>
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button" onClick={Home}>Inicio</button>
        </div>
        <div className="nav-right">
          <a href="https://wa.me/542615887735?text=Hola%20quiero%20informacion
      ">
            <img src={WhatsApp} alt="Logo" className="nav-logo" />
          </a>
        </div>
      </nav>

      <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-slate-800">
        <div className="max-w-5xl mx-auto">

          {/* Encabezado Principal */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Especialistas en el Hogar: <span className="text-blue-600">Confianza que fluye en Luján de Cuyo</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              En <strong>CHANGAS</strong>, no solo reparamos caños o instalamos cables; cuidamos el lugar donde vive tu familia. Somos una empresa orgullosamente lujanina, nacida con el objetivo de brindar soluciones integrales de mantenimiento y construcción en nuestra querida "Tierra del Malbec".
            </p>
          </div>

          {/* Cita destacada */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-10 rounded-r-lg">
            <p className="text-md md:text-lg italic text-slate-700">
              "Sabemos que encontrar un técnico de confianza es difícil. Por eso, hemos consolidado un equipo multidisciplinario que combina experiencia técnica con un compromiso inquebrantable por la honestidad y la prolijidad."
            </p>
          </div>

          {/* Cuadrícula de Diferenciales */}
          <div className="grid md:grid-cols-3 gap-8 my-12">

            {/* Item 1 */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">

              <h3 className="font-bold text-xl mb-2 text-blue-700">Multiservicios Expertos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Centralizamos tus necesidades. Ya sea una urgencia de electricidad, plomería, gas bajo normativa o esa reforma de construcción que siempre soñaste.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">

              <h3 className="font-bold text-xl mb-2 text-blue-700">Identidad Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conocemos Luján, sus barrios y las necesidades de sus vecinos. Nuestra cercanía nos permite responder con agilidad y un trato personalizado.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">

              <h3 className="font-bold text-xl mb-2 text-blue-700">Seguridad y Garantía</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trabajamos bajo estándares de seguridad rigurosos. Nuestra meta es que, cuando terminemos un trabajo, te olvides del problema para siempre.
              </p>
            </div>

          </div>

          {/* Misión Final */}
          <div className="text-center pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Nuestra Misión</h4>
            <p className="text-xl font-medium text-slate-800 max-w-2xl mx-auto mb-4">
              Ser el aliado estratégico de los vecinos de Luján de Cuyo para transformar sus casas en espacios seguros, funcionales y modernos.
            </p>
            <p className="text-blue-600 font-bold italic">
              "Queremos que nos elijas no solo por lo que hacemos, sino por cómo lo hacemos."
            </p>
            <br/>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contacto