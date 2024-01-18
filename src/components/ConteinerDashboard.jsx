import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ConteinerDashboard = () => {
    const navigateTo  = useNavigate();

    const handleLogout = () => {
        // Limpiar el sessionStorage y redirigir a la página de inicio de sesión
        sessionStorage.removeItem('adminid');
        navigateTo('/login');
    };

    return (
        <div className="container text-light bg-transparent p-3 rounded">
            <h1 className="mb-4">Dashboard de Administrador</h1>

            <button className='btn btn-danger mb-3' onClick={handleLogout}>
                Cerrar Sesión
            </button>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card bg-primary text-light">
                        <div className="card-body">
                            <h5 className="card-title">Usuarios</h5>
                            <p className="card-text">Administra usuarios aquí.</p>
                            <a href="#" className="btn btn-light text-dark">Ver Usuarios</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-secondary text-light">
                        <div className="card-body">
                            <h5 className="card-title">Cursos</h5>
                            <p className="card-text">Administra cursos aquí.</p>
                            <a href="#" className="btn btn-light text-dark">Ver Cursos</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h5 className="card-title">Estadísticas</h5>
                            <p className="card-text">Visualiza estadísticas del sitio.</p>
                            <a href="#" className="btn btn-light text-dark">Ver Estadísticas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
