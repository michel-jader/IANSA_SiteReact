import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import './eventos.css';
import '../../main/App.css';
import imagemEvento from '../../utils/imgs/evento.jpg'
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import { listarNoticias, definirPost } from '../../actions/eventosActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionModal from '../../components/Modal/ActionModal';
class Eventos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modoADM: false,
            modal: false,
            eventoEmQuestao: null
        }
    }

    componentDidMount() {
        this.props.listarNoticias()
    }

    componentWillMount() {
        this.handleAdm()
    }

    handleDelete(object) {
        this.setState({ ...this.state, modal: true, eventoEmQuestao: object })
        console.log(object)
    }

    delete() {
        console.log('VAI DELETAR')
    }

    async handleAdm() {
        const admLogado = await sessionStorage.getItem('admLogado')
        this.setState({ modoADM: admLogado })
    }

    render() {
        return (
            <Container classe="eventos_background">

                {this.state.modal &&
                    <ActionModal
                        modalIcon='trash-alt'
                        modalColor='#f64e65'
                        modalText='Deseja excluir o evento?'
                        btnText='Excluir'
                        modalFuncao={this.delete()}
                        cancel={() => this.setState({ modal: false })}
                    />
                }

                {
                    !this.state.modoADM ?
                        <React.Fragment>
                            <div className="flex column align-center" style={{ marginTop: 50 }}>
                                <div className="flex column t-center title-container">
                                    <h1>Eventos e Notícias</h1>
                                    <h3>Fique por dentro dos eventos organizados pelo IANSA</h3>
                                </div>

                                <div className="post-wrapper">


                                    {
                                        !this.props.listaNoticias.length ?
                                            <div className="no-post-cont">
                                                <React.Fragment>
                                                    <FontAwesomeIcon
                                                        icon='folder-open'
                                                        size='10x'
                                                        color='#e64f65'
                                                    />
                                                    <p>Não há postagens cadastradas até o momento</p>

                                                </React.Fragment>
                                            </div>
                                            :
                                            <React.Fragment>

                                                {
                                                    this.props.listaNoticias.map(noticia => (
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
                                                    ))
                                                }
                                            </React.Fragment>
                                    }
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
                                        <Link to={`/eventos/adm/adicionar`}>

                                            <button className="add-button">
                                                <FontAwesomeIcon
                                                    icon="plus"
                                                    color="#e64e65"
                                                    style={{ fontSize: 22, marginRight: 8 }}
                                                />
                                                <p>ADICIONAR POSTAGEM</p>
                                            </button>
                                        </Link>
                                    </div>
                                    {this.props.listaNoticias.length ?
                                        <React.Fragment>

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
                                                                    src={noticia.mainImage || imagemEvento }
                                                                    width={40}
                                                                    height={40}
                                                                    className="imgTabela"
                                                                />
                                                            </td>
                                                            <td> {noticia.title} </td>
                                                            <td> {noticia.createdAt} </td>

                                                            <td>
                                                                <Link to={`/eventos/adm/editar/${noticia.id}`}>
                                                                    <button style={{ marginRight: 5 }}>
                                                                        <FontAwesomeIcon
                                                                            icon="edit"
                                                                            color={'#2d3754'}
                                                                            style={{ fontSize: 22 }}
                                                                        />
                                                                    </button>
                                                                </Link>
                                                                <button onClick={() => this.handleDelete(noticia)}>
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
                                        </React.Fragment>

                                        :
                                        <div style={{ width: '100%', paddingTop: 8, paddingBottom: 8 }}>
                                            <p style={{ fontSize: 18 }}>Não há postagens cadastradas até o momento</p>
                                        </div>

                                    }
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
    { definirPost, listarNoticias },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Eventos)