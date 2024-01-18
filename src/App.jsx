import React, { useEffect, useState } from 'react';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { User } from "./views/User";
import PrivateRoute from "./components/PrivateRoute";
import { Dashboard } from './views/Dashboard';

import jsonData from './api/academia_preuniversitaria.json';

import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/bootstrap.css'

function App() {

    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/login" element={<Login json={jsonData} />} />
                <Route path="/admin" element={<Login json={jsonData} rol="admin"/>} />
                {/* Usa la función PrivateRoute para proteger la ruta "/user" */}
                {/* Puedes agregar más rutas protegidas aquí */}
                <Route
                    path="/user"
                    element={<PrivateRoute element={<User json={jsonData}/>} />}
                />
                <Route
                    path="/dasboard"
                    element={<PrivateRoute element={<Dashboard json={jsonData}/>} />}
                />
            </Routes>
        </>
    );
}

export default App