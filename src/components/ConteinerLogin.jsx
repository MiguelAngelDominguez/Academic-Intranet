import React, { useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import { InputForm } from './InputForm';
import { Button } from './Button';

import '../styles/ConteinerLogin.css';

export const ConteinerLogin = ({ jsonData ,rol=""}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem('userid') || false
    );
    if (isAuthenticated) {
        return <Navigate to="/user" replace />;
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo  = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('Usuario:', username);
        console.log('Contraseña:', password);

        setUsername((prevUsername) => prevUsername);
        setPassword((prevPassword) => prevPassword);

        const user = jsonData.estudiantes.find(
            (estudiante) => estudiante.usuario === username && estudiante.contrasena === password
        );

        if (user) {
            console.log('Inicio de sesión exitoso:', user);
            // Almacena el nombre de usuario en sessionStorage
            sessionStorage.setItem('userid', username);

            // Redirige a la página de usuario
            navigateTo('/user');
        } else {
            if(rol=="admin"){
                const user = jsonData.administradores.find(
                    (administrador) => administrador.usuario === username && administrador.contrasena === password
                );
                if (user) {
                    console.log('Inicio de sesión exitoso:', user);
                    // Almacena el nombre de usuario en sessionStorage
                    sessionStorage.setItem('adminid', username);
        
                    // Redirige a la página de usuario
                    navigateTo('/dasboard');
                } else {
                    alert('Usuario o contraseña incorrectos');
                }
            }else{
                alert('Usuario o contraseña incorrectos');
            }
        }
    };

    return (
        <div className='ContainerLogin'>
            <div className='loginForm'>
                <div className='formTitle'>Iniciar Sesión</div>
                <form className='form' onSubmit={handleLogin}>
                    <div>
                        <label htmlFor='username'>Usuario</label>
                        <InputForm
                            id='username'
                            type='text'
                            placeholder='Ingrese su usuario aquí ...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            icon="person"
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <InputForm
                            id='password'
                            type='password'
                            placeholder='Ingrese su contraseña ...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            icon="key"
                        />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};