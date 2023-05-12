import React from 'react';
import './DetailScreen.css'

function DetailImg({image, title}) {
    return (
        <div
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
        }}>
            <div>
            <h1>{title}</h1>
            </div>
        </div>
    );
}

export default DetailImg;