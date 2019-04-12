import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className="button" onClick={props.click}>
        <FontAwesomeIcon
            icon="bars"
            style={{ fontSize: 32, color: '#233454'}}
        />
    </button>
)

export default drawerToggleButton