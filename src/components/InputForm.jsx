import React from 'react';
import '../styles/InputForm.css';

export const InputForm = ({ id, type, placeholder, value, onChange, icon = "none" }) => {
    return (
        <>
            <div className='InputForm'>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className='inputLogin'
                    value={value}
                    onChange={onChange}
                />
                <i className={"bi bi-" + icon + "-fill inputIcon"}></i>
            </div>
        </>
    );
};
