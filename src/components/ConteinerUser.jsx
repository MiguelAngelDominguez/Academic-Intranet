import React, { useEffect, useState } from 'react';

import * as bootstrap from 'bootstrap'
import { useNavigate } from 'react-router-dom';
import { AssignedCourses } from './AssignedCourses';

import '../styles/ConteinerUser.css'
import '../styles/bootstrap.css'

export const ConteinerUser = ({ json }) => {
    const [user, setUser] = useState({
        nombre_completo: '',
        dni: '',
        area: '',
        nivel: '',
        cursos: [],
    });
    
    const navigateTo  = useNavigate();

    useEffect(() => {
        // Recupera el id de usuario desde sessionStorage
        const storedUserId = sessionStorage.getItem('userid');

        if (storedUserId) {
            // Busca el usuario en el JSON usando el userId
            const foundUser = json.estudiantes.find(
                (estudiante) => estudiante.usuario === storedUserId
            );

            if (foundUser) {
                // Actualiza el estado con la información del usuario
                setUser({
                    nombre_completo: foundUser.nombre_completo,
                    dni: foundUser.dni,
                    area: getAreaLabel(foundUser.area_postulacion),
                    nivel: getNivelLabel(foundUser.nivel),
                    cursos: foundUser.cursos,
                });
            }
        }
    }, [json]);

    // Función para obtener el nombre del área según el código
    const getAreaLabel = (areaCode) => {
        switch (areaCode) {
            case 1:
                return 'Medicina';
            case 2:
                return 'Letras';
            case 3:
                return 'Ingeniería';
            case 4:
                return 'Negocios';
            default:
                return '';
        }
    };

    // Función para obtener el nombre del nivel según el código
    const getNivelLabel = (nivelCode) => {
        switch (nivelCode) {
            case 'B':
                return 'Básico';
            case 'I':
                return 'Intermedio';
            case 'A':
                return 'Avanzado';
            default:
                return '';
        }
    };

    const handleLogout = () => {
        // Limpiar el sessionStorage y redirigir a la página de inicio de sesión
        sessionStorage.removeItem('userid');
        navigateTo('/login');
    };

    return (
        <div className='ConteinerUser'>
            <div className='userDasboard'>
                <i className='bi bi-person-circle'></i>
                <h2 className='userName'>{user.nombre_completo}</h2>
                <div className='userInfo'>
                    <div className='infoSlay'>
                        <div className='infoSlayItemTitle'>Nombre Completo:</div>
                        <div className='infoSlayItemValue'>{user.nombre_completo}</div>
                    </div>
                    <div className='infoSlay'>
                        <div className='infoSlayItemTitle'>DNI:</div>
                        <div className='infoSlayItemValue'>{user.dni}</div>
                    </div>
                    <div className='infoSlay'>
                        <div className='infoSlayItemTitle'>Area:</div>
                        <div className='infoSlayItemValue'>{user.area}</div>
                    </div>
                    <div className='infoSlay'>
                        <div className='infoSlayItemTitle'>Nivel:</div>
                        <div className='infoSlayItemValue'>{user.nivel}</div>
                    </div>
                </div>

                <button className='btn btn-danger' onClick={handleLogout}>
                    Cerrar Sesión
                </button>

                <div className='userCourseNotes'>
                    <h3 className='courseTitle'>
                        Cursos Asignados
                    </h3>
                    
                    <AssignedCourses courses={user.cursos}/>
                </div>
            </div>
        </div>
    )
}
