import React from 'react';
import { useNavigate } from 'react-router-dom';
import QrRender from './Qr-render';

import '../styles/ConteinerDashboard.css';

export const ConteinerDashboard = () => {

    const handleLogout = () => {
        // Limpiar el sessionStorage y redirigir a la página de inicio de sesión
        sessionStorage.removeItem('adminid');
        navigateTo('/login');
    };

    const navigateTo = useNavigate();

    return (
        <div className="container text-light bg-transparent p-3 rounded">
            <h1 className="mb-4 title">
                Dashboard de Administrador
            </h1>

            <div className='containerButtons'>
                <button className='btn btn-danger mb-3' onClick={handleLogout}>
                    Cerrar Sesión
                </button>
                <button type="button" className="btn btn-dark mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Escanear QR
                    <i className="bi bi-qr-code-scan"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered dark">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Asistencia por QR
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <QrRender />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cerrar
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Guardar Código
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card bg-primary text-light">
                        <div className="card-body">
                            <h5 className="card-title">Administrar Estudiantes</h5>
                            <a href="#" className="btn btn-light text-dark">Ver Usuarios</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-secondary text-light">
                        <div className="card-body">
                            <h5 className="card-title">Administrar Cursos</h5>
                            <a href="#" className="btn btn-light text-dark">Ver Cursos</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-light">
                        <div className="card-body">
                            <h5 className="card-title">Administrar Areas</h5>
                            <a href="#" className="btn btn-light text-dark">Ver Cursos</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h5 className="card-title">Visualiza Estadísticas del sitio</h5>
                            <a href="#" className="btn btn-light text-dark">Ver Estadísticas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
