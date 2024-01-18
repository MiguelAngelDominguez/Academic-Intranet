import React from 'react'

import { useNavigate } from 'react-router-dom';

import '../styles/ConteinerHome.css'

export const ConteinerHome = () => {
    const navigateTo  = useNavigate();

    const handleIngresar = () => {
        // Redirige a /login al hacer clic en el botón Ingresar
        navigateTo('/login');
    }

    return (
        <div className='ConteinerHome'>
            <div className='HeroSection'>
                <div className='HeroSectionHome'></div>
                <div className='HeroSectionText'>
                    <div className='HeroTextHome'>
                        <h1 className='HeroSectionTextTitle'>
                            ¡Bienvenido!
                        </h1>
                        <p className='HeroSectionTextSubtitle'>
                            Plataforma de tranparencia sobre el avance academico de los estudiantes de la Academia Yachayhuasi.
                        </p>
                    </div>
                </div>
                <button className='btn btn-dark HeroSectionButton' onClick={handleIngresar}>
                    Ingresar
                </button>
            </div>
        </div>
    )
}