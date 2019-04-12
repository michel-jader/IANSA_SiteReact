import React from 'react';
import './Footer.css'
import logo from '../../utils/imgs/iansa_logotipo.png'
import insta from '../../utils/imgs/insta.png'
import face from '../../utils/imgs/face.png'
import bazar from '../../utils/imgs/bazar.png'

const Footer = () => (
    <div className="footer">
        <div className="footer_content">
            <div className="flex row al-ce">
                <div className="img_container">
                    <img src={logo} alt="" style={{ width: 150, height: 90, padding: 15 }} />
                </div>
                <div className="flex column mlf-20">
                    <span className="h1">IANSA Casa de Apoio </span>
                    <div className="flex row">
                        <div className="flex column">
                            <span className="h1">Unidade I</span>
                            <span className="h3">Av. Luís Vaz de Camões, 2901</span>
                            <span className="h3">Jardim Eden, Franca-SP</span>
                            <span className="h3">(16) 3409-261</span>
                        </div>
                        <div className="flex column mlf-20">
                            <span className="h1">Unidade II</span>
                            <span className="h3">R. João de Góes Conrado, 2570</span>
                            <span className="h3">São José, Franca-SP</span>
                            <span className="h3">(16) 3702-4042</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex row h-110">

                <button className="shopping-btn">
                    <a href="https://loja.iansa.org.br/" target="_blank" rel="noopener noreferrer">
                        <img src={bazar} alt="Visite nosso bazar" className="size-img" />
                    </a>
                    BAZAR VIRTUAL
                </button>

                <button className="media-btn">
                    <a href="https://www.instagram.com/casadeapoioiansa/" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Visite nosso Instagram" className="size-img" />
                    </a>
                </button>
                <button className="media-btn">
                    <a href="https://www.facebook.com/casadeapoioiansa/" target="_blank" rel="noopener noreferrer">
                        <img src={face} alt="Visita nossa página no Facebook" className="size-img" />
                    </a>
                </button>
            </div>
        </div>
    </div>
)
export default Footer