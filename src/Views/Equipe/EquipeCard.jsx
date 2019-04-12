import React from 'react';
import './Equipe.css'

const EquipeCard = props => (
    <div className="equipe-card">
        <div className="overlay">
        </div>
        <img src={props.pessoa} alt="" className="equipe-img" />
        <div className="name-desc">
            <span>{props.nome}</span>
            <span>{props.cargo}</span>
        </div>
    </div>
)

export default EquipeCard