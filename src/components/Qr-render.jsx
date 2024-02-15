import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import '../styles/QrRender.css';

const QrRender = () => {

    useEffect(() => {
        // Este efecto no realiza ninguna operación, pero puedes agregar lógica adicional si es necesario
    }, []);

    const [data, setData] = useState('');

    return (
        <div className="App">
            <div>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: "300px" }}
                />
                <div>
                    <p>Resultado del QR: {data}</p>
                </div>
            </div>
        </div>

    );
};

export default QrRender;
