import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import '../Eventos/eventos.css'
import '../../main/App.css';
import './EventoInfo.css'

class EventoInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            noticia: {},
            indexSelect: null
        }
    }

    async componentDidMount() {
        const { match: { params } } = await this.props
        await this.setState({ id: params.id })
        this.props.listaNoticias.forEach(element => {
            if (element.id === this.state.id) {
                this.setState({ ...this.state, noticia: element })
            }
        });
    }

    mudarFoto = (numero, aoVoltar) => {
        if (this.state.noticia.imagens[this.state.indexSelect + numero]) {
            this.setState({
                ...this.state, indexSelect: this.state.indexSelect + numero
            })
        } else {
            this.setState({ ...this.state, indexSelect: aoVoltar })
        }
    }

    render() {
        return (
            <Container classe="eventos_background">
                <div className="evento-content">

                    <div className="flex column align-center">

                        <h1>{this.state.noticia.titulo}</h1>
                        <h3>{this.state.noticia.descricao}</h3>

                    </div>

                    <div className="img-content">
                        <img
                            alt="imagem-do-evento"
                            src={this.state.noticia.imagemCapa}
                            style={{ width: '100%', borderRadius: 4 }}
                        />
                    </div>

                    <div className="separator" />

                    <div className="txt-content">
                        <p>{this.state.noticia.texto}</p>
                    </div>

                    <div className="separator" />

                    {
                        this.state.noticia.imagens && this.state.noticia.imagens.length ?

                            <React.Fragment>

                                {this.state.noticia.imagens.map((imagem, index) => (
                                    <img
                                        key={imagem.id}
                                        alt="img"
                                        src={imagem.src}
                                        width={100}
                                        height={90}
                                        className="imgs"
                                        onClick={() => this.setState({ indexSelect: index })}
                                    />
                                ))}

                                <div className="separator" />

                            </React.Fragment>

                            : null
                    }

                    <Link to="/eventos">
                        <button type="button" className="back-btn">
                            <FontAwesomeIcon
                                icon='long-arrow-alt-left'
                                size='3x'
                                color='#e64f65'
                            />
                        </button>
                    </Link>

                </div>

                {
                    this.state.indexSelect !== null &&
                    <div className="black-screen">
                        <button
                            type="button"
                            onClick={() => this.setState({ ...this.state, indexSelect: null })}
                            className="close-button"
                        >
                            <FontAwesomeIcon
                                icon="times"
                                color={'#fff'}
                                size='2x'
                            />
                        </button>
                        <img
                            alt=""
                            src={this.state.noticia.imagens[this.state.indexSelect].src}
                            style={{ marginTop: -50, borderRadius: 4 }}
                        />

                        <button
                            type="button"
                            onClick={() => this.mudarFoto(+1, 0)}
                            style={{ position: 'absolute', right: 20 }}
                        >
                            <FontAwesomeIcon
                                icon="arrow-circle-right"
                                color={'#fff'}
                                size='2x'
                            />

                        </button>

                        <button
                            type="button"
                            onClick={() => this.mudarFoto(-1, this.state.noticia.imagens.length - 1)}
                            style={{ position: 'absolute', left: 20 }}
                        >
                            <FontAwesomeIcon
                                icon="arrow-circle-left"
                                color='#fff'
                                size="2x"
                            />
                        </button>
                    </div>
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


export default connect(mapStateToProps)(EventoInfo)