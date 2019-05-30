import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './eventos.css';
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import { definirPost } from '../../actions/eventosActions'

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
                            <button onClick={() => { props.definirPost(noticia) }}>
                                <p>Ver mais</p>
                            </button>
                        </div>
                    ))}
                </div>
            </React.Fragment>
            :
            <div className="p-container">

                <div className="p-container-content">
                    <img
                        src="https://queconceito.com.br/wp-content/uploads/evento.jpg"
                        alt=""
                        className="post-image"
                    />
                </div>

                <div className="p-container-content overflow">
                    <div style={{ padding: 12 }}>

                        <p className="titulo">{props.noticia.title.rendered}</p>
                        <p className="sub-title">Subtítulo, uma breve descrição do evento ocorrido e coisa e tal.</p>
                        <p className="descricao">
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                            tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                            perferendis doloribus asperiores repellat."
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </p>

                    </div>
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