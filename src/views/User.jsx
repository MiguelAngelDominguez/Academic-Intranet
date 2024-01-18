import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ConteinerUser } from '../components/ConteinerUser'

export const User = ({json}) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Recupera el id de usuario desde sessionStorage
        const storedUserId = sessionStorage.getItem('userid');

        if (storedUserId) {
            // Busca el nombre del alumno en el JSON usando el userId
            const user = json.estudiantes.find(
                (estudiante) => estudiante.usuario === storedUserId
            );

            if (user) {
                // Actualiza el estado con el nombre del alumno
                setUserName(user.nombre_completo);
            }
        }
    }, [json]);

    return (
        <>
            <Header />
            < ConteinerUser json={json} /> 
            <Footer />
        </>
    )
}
