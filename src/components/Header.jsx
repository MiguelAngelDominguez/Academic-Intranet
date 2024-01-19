import React from 'react'

import { Logo } from './Logo'

import '../styles/Header.css'

export const Header = () => {
    return (
        <div className='Header'>
            <Logo />
            <i className="bi bi-list"></i>
        </div>
    )
}
