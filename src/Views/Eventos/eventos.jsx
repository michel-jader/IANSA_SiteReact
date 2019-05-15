import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './eventos.css';
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import { definirPost } from './eventosActions'
import { bindActionCreators } from 'redux';

const Eventos = props =>
    <Container classe="eventos_background">
        {props.noticia === null ?
            <React.Fragment>
                <div className="flex column align-center" style={{ marginTop: 50 }}>
                    <div className="flex column t-center title-container">
                        <h1>Eventos e Notícias</h1>
                        <h3>Fique por dentro dos eventos organizados pelo IANSA</h3>
                    </div>
                </div>

                <div className="post-wrapper">
                    {props.listaNoticias.map(noticia => (
                        <div className="post" key={noticia.id}>
                            <img
                                src="https://queconceito.com.br/wp-content/uploads/evento.jpg"
                                alt=""
                                className="image"
                            />
                            <div className="p-6">
                                <p className="post-title">{noticia.title.rendered}</p>
                                <p className="post-desc"> {noticia.excerpt.rendered} </p>
                            </div>
                            {/* <NavLink to={`/eventos/${noticia.id}`}> */}
                            <button onClick={() => { props.definirPost(noticia) }}>
                                <p>Ver mais</p>
                            </button>
                            {/* </NavLink> */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
            :
            <div className="p-container">
                <div>
                    <img
                        src="https://queconceito.com.br/wp-content/uploads/evento.jpg"
                        alt=""
                        className="post-image"
                    />
                </div>
                <div>
                    <p>{props.noticia.title.rendered}</p>
                </div>
            </div>
        }

        <Footer />
    </Container>

const mapStateToProps = state => ({
    listaNoticias: state.noticias.listaNoticias,
    noticia: state.noticias.noticia
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { definirPost },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Eventos)