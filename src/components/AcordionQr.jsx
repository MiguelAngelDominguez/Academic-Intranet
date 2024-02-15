import React, { useState } from 'react';
import QRCode from 'qrcode.react';

export const AcordionQr = ({ codeqr }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div id="accordionExample">
            <div className="accordion-item slayQr">
                <h2 className="accordion-header title">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={isCollapsed ? "true" : "false"} aria-controls="collapseOne" onClick={toggleCollapse}>
                        Código QR
                        <i className={isCollapsed ? "gg-chevron-down" : "gg-chevron-up"}></i>
                    </button>
                </h2>
                <div id="collapseOne" className={`qr accordion-collapse collapse${isCollapsed ? '' : ' show'}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className='qr'>
                            <QRCode value={codeqr} size={85} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};