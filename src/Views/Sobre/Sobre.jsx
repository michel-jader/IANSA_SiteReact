import React from 'react';
import './Sobre.css'
import Container from '../../components/Container/Container';
import Tabs from '../../components/Tabs/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import Footer from '../../components/Footer/Footer';

class Sobre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'aTab'
        };
    }

    render() {
        var slideSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slideToScroll: 1,
            // centerMode: true
        };

        return (
            <Container classe="sobre_background">

                <div className="sobre-content">
                    <div className="tab-content">
                        <Tabs
                            active={this.state.active}
                            onChange={active => this.setState({ active })}
                            ref={tab => this.tab_container = tab}
                        >

                            <div key="aTab">IANSA</div>
                            <div key="bTab">VISÃO</div>
                            <div key="cTab">MISSÃO</div>
                            <div key="dTab">VALORES</div>
                        </Tabs>

                        <div className={this.state.active === 'aTab' ? "display" : "none"} >
                            <h2>Sobre o IANSA</h2>
                            <p className="desc">
                                Somos uma organização de apoio a pessoas de todas as idades em
                                situação de adoecimento e suas famílias, que acolhe com carinho,
                                amor e dignidade, prestando-lhes solidariedade e
                                acompanhamento técnico e humanizado com excelência em tudo
                                que possamos oferecer.
                        </p>
                        </div>
                        <div className={this.state.active === 'bTab' ? "display" : "none"}>
                            <h2>Qual a visão do IANSA?</h2>
                            <p className="desc">
                                Ser um centro de referência nacional no tratamento humanizado às
                                pessoas em situação de adoecimento, oferecendo apoio de cunho
                                assistencial na saúde, esporte, lazer, cultura e educação.
                        </p>
                        </div>
                        <div className={this.state.active === 'cTab' ? "display" : "none"}>
                            <h2>Qual é a missão do IANSA?</h2>
                            <p className="desc">
                                Ser o porto seguro das pessoas em tratamento e suas famílias,
                                acolhendo-as com muito respeito, dignidade, amor e alegria.
                    </p>
                        </div>
                        <div className={this.state.active === 'dTab' ? "display" : "none"}>
                            <h2>Quais são nossos valores?</h2>
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Dignididade em primeiro lugar </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Respeito e ética </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Transparência </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Compromisso </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Responsabilidade </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Integridade </p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon="check"
                                        style={{ fontSize: 24, color: '#64dd17' }}
                                    />
                                    <p className="desc"> Amor e Alegria</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="slide-content">
                        <Slider {...slideSettings}>
                            <div style={{ padding: 40, textAlign: 'center' }}>
                                <h2>IANSA </h2>
                                <p className="desc w90-5">
                                    Somos uma organização de apoio a pessoas de todas as idades em
                                    situação de adoecimento e suas famílias, que acolhe com carinho,
                                    amor e dignidade, prestando-lhes solidariedade e
                                    acompanhamento técnico e humanizado com excelência em tudo
                                    que possamos oferecer.
                                </p>
                            </div>
                            <div style={{ padding: 40, textAlign: 'center' }}>
                                <h2>VISÃO</h2>
                                <p className="desc w90-5">
                                    Ser um centro de referência nacional no tratamento humanizado às
                                    pessoas em situação de adoecimento, oferecendo apoio de cunho
                                    assistencial na saúde, esporte, lazer, cultura e educação.
                                </p>
                            </div>
                            <div style={{ padding: 40, textAlign: 'center' }}>
                                <h2>MISSÃO</h2>
                                <p className="desc w90-5">
                                    Ser um centro de referência nacional no tratamento humanizado às
                                    pessoas em situação de adoecimento, oferecendo apoio de cunho
                                    assistencial na saúde, esporte, lazer, cultura e educação.
                                </p>
                            </div>
                            <div style={{ padding: 40, textAlign: 'center' }}>
                                <h2>VALORES </h2>
                                <ul className="w90-5">
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Dignididade em primeiro lugar </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Respeito e ética </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Transparência </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Compromisso </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Responsabilidade </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Integridade </p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon="check"
                                            style={{ fontSize: 24, color: '#64dd17' }}
                                        />
                                        <p className="desc"> Amor e Alegria</p>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>

                    <div className="imgs-container">
                        <div className="iansa-img refeitorio" />
                        <div className="iansa-img planta" />
                        <div className="iansa-img van" />
                        <div className="iansa-img cabelo" />
                    </div>
                </div>
                <Footer />
            </Container>
        )
    }
}

export default Sobre