import React from 'react';
import './eventos.css';
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

export default () =>
    <Container classe="eventos_background">
        <div className="flex column align-center" style={{ marginTop: 50 }}>
            <div className="flex column t-center title-container">
                <h1>Eventos e Notícias</h1>
                <h3>Fique por dentro dos eventos organizados pelo IANSA</h3>
            </div>
        </div>

        <div className="post-wrapper">

            <div className="post">
                <img
                    src={'https://queconceito.com.br/wp-content/uploads/evento.jpg'}
                    className="image"
                    alt=""
                />
                <div className="p-6">
                    <p className="post-title">Jantar no Espaço Flanboyant</p>
                    <p className="post-desc">Jantar realizado no espaço Flanboyant no dia 20/10/15 com leilão. Testando pra </p>
                </div>

                <button>
                   <p>Ver mais</p>
                </button>

            </div>

            <div className="post"></div>

            <div className="post"></div>

            <div className="post"></div>

            <div className="post"></div>

            <div className="post"></div>

            <div className="post"></div>

            {/* <div className="post"></div> */}

        </div>

        <Footer />
    </Container>
