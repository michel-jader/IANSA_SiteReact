import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { bindActionCreators } from 'redux';

import Container from '../../components/Container/Container';
import '../Eventos/eventos.css'
import '../../main/App.css';
import './EventoInfo.css'
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EventoInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            noticia: {}
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

    render() {
        return (
            <Container classe="eventos_background">
                <div className="evento-content">

                    <div className="flex column align-center">

                        <h1>{this.state.noticia.titulo}</h1>
                        <h3>{this.state.noticia.descricao}</h3>

                    </div>


                    {/* <div className="separator" /> */}

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

                                {this.state.noticia.imagens.map(imagem => (
                                    <img
                                        key={imagem.id}
                                        alt="img"
                                        src={imagem.src}
                                        width={100}
                                        height={90}
                                        className="imgs"
                                    // style={{ }}
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
                                style={{ marginRight: 8 }}
                            />
                            <p>VOLTAR</p>
                        </button>
                    </Link>

                </div>

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