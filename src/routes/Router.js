import { Route, Routes } from 'react-router-dom'
import Home from "../components/Home"
import Ubicacion from "../components/nav/ubicacion" 
import Sugerencia1 from "../components/nav/Sugerencia1"
import Sugerencia2 from "../components/nav/Sugerencia2"
import Sugerencia3 from "../components/nav/Sugerencia3"
import Sugerencia4 from "../components/nav/Sugerencia4"
import SobreNosotros from "../components/nav/SobreNosotros"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ubi' element={<Ubicacion/>} />
        <Route path='/sug1' element={<Sugerencia1/>} />
        <Route path='/sug2' element={<Sugerencia2/>} />
        <Route path='/sug3' element={<Sugerencia3/>} />
        <Route path='/sug4' element={<Sugerencia4/>} />
        <Route path='/nosotros' element={<SobreNosotros/>} />
      </Routes>
    </div>
  )
}

export default Router