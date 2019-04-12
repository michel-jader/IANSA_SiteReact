import React from 'react'
import './Mantenedor.css'
import '../../main/App.css'
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

export default props =>
    <Container classe="mantenedor_background">

        <div className="flex column align-center" style={{ width: '100%' }}>
            <div className="flex column t-center title-container">
                <h1>Seja um Mantenedor</h1>
                <h3>Basta escolher uma das mensalidades para ser mais um mantenedor do IANSA e
                ajude-nos a continuar melhorando a vida de várias pessoas.
        </h3>
            </div>

            <div className="price-card-wrapper flex row align-center">
                <div className="flex price-card column align-center jc-center t-center">
                    <div className="flex align-center jc-center outer-circle light-green">
                        <div className="flex align-center jc-center inner-circle green">
                            <div className="carinho" />
                        </div>
                    </div>
                    <div className="flex column jc-center t-center align-center mt-20">
                        <p className="title">PLANO CARINHO</p>
                        <div className="flex row align-center jc-center">
                            <p className="cifra">R$</p>
                            <p className="price">25,00</p>
                        </div>
                        <p>Mensais</p>
                        <a href="https://pag.ae/blg8gQG" target="blank">
                            <button className="btn btn-green">
                                <p>
                                    ASSINE
                            </p>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex price-card column align-center jc-center t-center">
                    <div className="flex align-center jc-center outer-circle light-yellow">
                        <div className="flex align-center jc-center inner-circle yellow">
                            <div className="felicidade" />
                        </div>
                    </div>
                    <div className="flex column jc-center t-center align-center mt-20">
                        <p className="title">PLANO FELICIDADE</p>
                        <div className="flex row align-center jc-center">
                            <p className="cifra">R$</p>
                            <p className="price">50,00</p>
                        </div>
                        <p>Mensais</p>
                        <a href="https://pag.ae/bkg8gPn" target="blank">
                            <button className="btn btn-yellow">
                                <p>
                                    ASSINE
                            </p>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex price-card column align-center jc-center t-center">
                    <div className="flex align-center jc-center outer-circle light-red">
                        <div className="flex align-center jc-center inner-circle red">
                            <div className="amor" />
                        </div>
                    </div>
                    <div className="flex column jc-center t-center align-center mt-20">
                        <p className="title">PLANO AMOR</p>
                        <div className="flex row align-center jc-center">
                            <p className="cifra">R$</p>
                            <p className="price">100,00</p>
                        </div>
                        <p>Mensais</p>
                        <a target="blank" href="https://pag.ae/bfg8gNp">
                            <button className="btn btn-red">
                                <p>
                                    ASSINE
                            </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <Footer />

    </Container>