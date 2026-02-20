import React from 'react'
import './Home.css'
import Nav from '../components/Nav'
import Carousel from './Carousel'
import Sugerencias from './Sugerencias'
import Redes from './Redes'

const Home = () => {
    return (
        <div className='body'>
            <Nav/>
            <Carousel/>
            <Sugerencias/>
            <Redes/>
        </div>
    )
}

export default Home