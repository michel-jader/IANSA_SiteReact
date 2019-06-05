import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import './eventos.css';
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import { definirPost } from '../../actions/eventosActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Eventos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modoADM: false
        }
    }

    componentWillMount() {
        this.handleAdm()
    }

    async handleAdm() {
        const admLogado = await sessionStorage.getItem('admLogado')
        this.setState({ modoADM: admLogado })
        console.log(admLogado)
    }

    render() {
        return (
            <Container classe="eventos_background">

                {
                    !this.state.modoADM ?
                        <React.Fragment>

                            <div className="flex column align-center" style={{ marginTop: 50 }}>
                                <div className="flex column t-center title-container">
                                    <h1>Eventos e Notícias</h1>
                                    <h3>Fique por dentro dos eventos organizados pelo IANSA</h3>
                                </div>


                                <div className="post-wrapper">
                                    {this.props.listaNoticias.map(noticia => (
                                        <div className="post" key={noticia.id}>
                                            <img
                                                src={noticia.imagemCapa}
                                                alt=""
                                                className="image"
                                            />
                                            <div className="p-6">
                                                <p className="post-title">{noticia.titulo}</p>
                                                <p className="post-desc"> {noticia.descricao} </p>
                                            </div>
                                            <Link to={`/eventos/${noticia.id}`}>
                                                <button onClick={() => this.props.definirPost(noticia)}>
                                                    <p>Ver mais</p>
                                                </button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>

                        :

                        <React.Fragment>
                            <div className="flex column align-center" style={{ marginTop: 50, width: '100%' }}>
                                <div className="flex column t-center title-container">
                                    <h1>Eventos e Notícias - ADM</h1>
                                    <h3>Visualise, gerencie e adicione eventos publicados no site.</h3>
                                </div>

                                <div className="card-tabela-eventos">
                                    <div className="header">
                                        <p>Postagens</p>
                                        <button className="add-button">
                                            <FontAwesomeIcon
                                                icon="plus"
                                                color="#e64e65"
                                                style={{ fontSize: 22, marginRight: 8 }}
                                            />
                                            ADICIONAR POSTAGEM
                                    </button>
                                    </div>
                                    <table cellSpacing="0" className="table">
                                        <thead>
                                            <tr>
                                                <th>Imagem</th>
                                                <th>Evento</th>
                                                <th>Data</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.listaNoticias.map((noticia, index) => (
                                                <tr className="hover" key={index}>
                                                    <td>
                                                        <img alt="imagem de capa"
                                                            src={noticia.imagemCapa}
                                                            width={40}
                                                            height={40}
                                                            style={{
                                                                borderRadius: 50,
                                                                marginTop: 5
                                                            }}
                                                        />
                                                    </td>
                                                    <td> {noticia.titulo} </td>
                                                    <td> {noticia.data} </td>

                                                    <td>
                                                        <button style={{ marginRight: 5 }}>
                                                            <FontAwesomeIcon
                                                                icon="edit"
                                                                color={'#2d3754'}
                                                                style={{ fontSize: 22 }}
                                                            />
                                                        </button>
                                                        <button>

                                                            <FontAwesomeIcon
                                                                icon="trash-alt"
                                                                color="#f64e65"
                                                                style={{ fontSize: 22 }}
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div style={{ width: '100%' }}>

                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                }


                <Footer />
            </Container>

        )
    }

}

const mapStateToProps = state => ({
    listaNoticias: state.noticias.listaNoticias,
    noticia: state.noticias.noticia
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { definirPost },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Eventos)