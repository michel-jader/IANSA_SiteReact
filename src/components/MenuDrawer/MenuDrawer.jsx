import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './MenuDrawer.css'
import logo from '../../utils/imgs/logo.png'

const menuDrawer = props => {

    let drawerClasses = 'menu-drawer'
    if (props.show) {
        drawerClasses = 'menu-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <div className="logo-container p-20-20">
                <button onClick={props.click}>
                    <FontAwesomeIcon
                        icon="arrow-circle-left"
                        style={{ fontSize: 32, color: '#227b87' }}
                    />
                </button>
                <img src={logo} alt="" style={{ width: 180, marginLeft: 20 }} />
            </div>
            <ul>
                <li> <a href="/sobre">SOBRE</a> </li>
                <li><a href="/servicos">SERVIÇOS</a> </li>
                <li><a href="/eventos">EVENTOS</a></li>
                <li><a href="/seja-um-mantenedor">SEJA UM MANTENEDOR</a></li>
                <li><a href="/equipe">EQUIPE</a></li>
                <li><a href="/entre-em-contato">CONTATO</a></li>
                <li><a href="/em-andamento">TRANSPARÊNCIA</a></li>
                <li><a href="/adm">SOU ADM</a></li>
            </ul>
            <a href="https://pag.ae/bhg8d0n" target="blacnk">
                <button className="donate">
                    <p>DOE AQUI</p>
                </button>
            </a>
        </nav>
    )
}

export default menuDrawer