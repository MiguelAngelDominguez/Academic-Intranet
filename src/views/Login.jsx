import React from 'react'
import { Header } from '../components/Header'
import { ConteinerLogin } from '../components/ConteinerLogin'
import { Footer } from '../components/Footer'

import '../styles/Login.css'

export const Login = ({json,rol}) => {
    return (
        <>
            <Header />
            <ConteinerLogin jsonData={json} rol={rol}/>
            <Footer />
        </>
    )
}
