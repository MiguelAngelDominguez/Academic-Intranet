import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './normalize.css';
import './main.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="">
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
