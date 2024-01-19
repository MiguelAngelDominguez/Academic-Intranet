import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// Función para renderizar rutas protegidas
const PrivateRoute = ({ element, ...props }) => {
    // Simula la autenticación, verifica si hay un usuario ID almacenado en sessionStorage
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem('userid') || sessionStorage.getItem('adminid') || false
    );

    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute