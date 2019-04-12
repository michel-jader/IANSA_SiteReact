import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Toolbar.css'
import logo from '../../utils/imgs/logo.png'
import DrawerToggleButton from '../MenuDrawer/DrawerToggleButton';

const Toolbar = props => (

    <header className="toolbar">
        <nav className="t-nav">

            <div className="logo">
                <div className="d-1000">
                    <DrawerToggleButton click={props.menuClickHandler} />
                </div>
                <Link to="/">
                    <img src={logo} alt="" className="toolbar-img"></img>
                </Link>
            </div>
            <div className="t-nav-item">
                <ul>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/sobre">SOBRE </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/servicos">SERVIÇOS </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/eventos">EVENTOS </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/seja-um-mantenedor">SEJA UM MANTENEDOR </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/equipe">EQUIPE </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/entre-em-contato">CONTATO </NavLink></li>
                    <li><NavLink activeStyle={{ color: '#f64c65' }} to="/transparencia">TRANSPARÊNCIA </NavLink></li>
                </ul>
            </div>
            <a href="https://pag.ae/bhg8d0n" target="blank"> <button className="donate-btn"> DOE AQUI</button></a>
        </nav>
    </header>
);

export default Toolbar