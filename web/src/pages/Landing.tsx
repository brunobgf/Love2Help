import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImg from '../images/logoImg2.png'

import '../styles/pages/landing.css'

const Landing = () => {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src = {logoImg} alt = "Love2Help"/>
                <main>
                    <h1>Espalhe felicidade para o mundo</h1>
                    <p>Mude o dia de muitas pessoas através de doações! </p>
                </main>

                <div className = "location">
                    <strong>Belo Horizonte</strong>
                    <span>Minas Gerais</span>
                </div>
                <Link to="/app" className = "enter-app">
                    <FiArrowRight size={26} color = "rgba(0,0,0,0.6)"/>
                </Link>

            </div>
        </div>

    );
}

export default Landing;