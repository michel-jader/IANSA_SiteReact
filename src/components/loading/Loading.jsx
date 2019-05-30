import React from 'react'
import './Loading.css'

export default ({visivel}) =>
    <div
    style={{display: visivel ? 'flex' : 'none'}}
    className="loading">
        <span>CARREGANDO...</span>
    </div>