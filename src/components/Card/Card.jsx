import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = props => (
    <div className="flex column t-center card align-center">
        <FontAwesomeIcon
            icon={props.icon}
            style={{ fontSize: 50, color: '#f64c65' }}
        />
        <p className="card-title">{props.title}</p>
        <p className="card-text">{props.subtitle}</p>
    </div>
)

export default Card