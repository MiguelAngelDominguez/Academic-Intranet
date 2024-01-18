import React from 'react';

import '../styles/AssignedCourses.css';

export const AssignedCourses = ({ courses }) => {
    return (
        <>
            <table className="AssignedCourses table table-dark table-striped accordion accordion-flush" id="accordionFlushExample">
                <thead>
                    <div className='typeCourse'>
                        <div>
                            #
                        </div>
                        <div>
                            Curso de Especialidad
                        </div>
                    </div>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <div className='accordion-header'>
                                <button className="courseCollapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index + 1}`} aria-expanded="false" aria-controls={`flush-collapse${index + 1}`}>
                                    <th scope="row">{index + 1}</th>
                                    <th>{course.nombre}</th>
                                    <td>
                                        <i className="bi bi-journal-bookmark-fill"></i>
                                        {/* <i className="bi bi-hand-index-thumb"></i> */}
                                        {/* <i className="bi bi-printer-fill"></i> */}
                                    </td>
                                </button>
                            </div>
                            <div id={`flush-collapse${index + 1}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <table className="table table-dark table-striped accordion accordion-flush" id="accordionFlushExample">
                                        <thead>
                                            <div className='notesHead borderTable'>
                                                <div>
                                                    #
                                                </div>
                                                <div>
                                                    Nota
                                                </div>
                                                <div>
                                                    Fecha
                                                </div>
                                            </div>
                                        </thead>
                                        <tbody>
                                            {/* Aquí convertimos el objeto historial_notas en un array y luego lo mapeamos */}
                                            {Object.entries(course.historial_notas).map(([practica, datos]) => (
                                                <div key={practica} className='accordion-header courseCollapsed borderTable'>
                                                    <tr>
                                                        {practica}
                                                    </tr>
                                                    <tr>
                                                        {datos.nota}
                                                    </tr>
                                                    <tr>
                                                        {datos.fecha}  
                                                    </tr>
                                                </div>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
