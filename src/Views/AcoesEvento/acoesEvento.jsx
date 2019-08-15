import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { cadastrarPost } from '../../actions/eventosActions';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import '../../main/App.css';
import './acoesEvento.css'

class AcoesEvento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modoADM: false,
            title: '',
            subtitle: '',
            content: '',
            date: 'null',
            mainImage: '',
            images: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        e.preventDefault()
        this.setState({ [name]: value })
        // console.log(this.state)
        // console.log(e, value)
    }

    handleImage = (image) => {
        console.log(image)
        this.setState({
            ...this.state,
            mainImage: image
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, date, content, mainImage, subtitle, images } = this.state

        var form = {
            title,
            subtitle,
            date,
            content,
            mainImage,
            images
        }
        this.props.cadastrarPost(form)
    }

    componentWillMount() {
        this.handleAdm()
    }

    async componentDidMount() {
        console.log(this.props)
        const { match: { params } } = await this.props
        await this.setState({ idNoticia: params.id })
        this.props.listaNoticias.forEach(noticia => {
            if (noticia.id === this.state.idNoticia) {
                this.setState({ ...this.state, noticia: noticia })
            }
        })
    }

    async handleAdm() {
        const admLogado = await sessionStorage.getItem('admLogado')
        this.setState({ modoADM: admLogado })
    }

    render() {
        return (
            <Container classe="eventos_background">

                {
                    this.state.modoADM !== null ?
                        <React.Fragment>
                            <div className="wrapper" style={{ marginTop: 50 }}>

                                <div className="header-content">
                                    <Link to="/eventos">
                                        <FontAwesomeIcon
                                            icon="arrow-circle-left"
                                            size="2x"
                                            color="#757575"
                                            style={{ marginRight: 15 }}
                                        />
                                    </Link>
                                    <p>{this.state.idNoticia ? 'Editar' : 'Adicionar'} evento</p>
                                </div>

                                <form
                                    className="formulario"
                                    onSubmit={this.handleSubmit}
                                    autoComplete="false"
                                >

                                    <Input
                                        label="Título"
                                        type="text"
                                        floatingLabel={true}
                                        required={true}
                                        id="title"
                                        name="title"
                                        autoComplete="false"
                                        formNoValidate={true}
                                        autoCapitalize="true"
                                        autoCorrect="false"
                                        onChange={this.handleChange}
                                        defaultValue={this.state.title || ''}
                                    />

                                    <Input
                                        label="Data do evento"
                                        type="date"
                                        floatingLabel={false}
                                        required={true}
                                        id="data"
                                        name="date"
                                        autoComplete="false"
                                        formNoValidate={true}
                                        onChange={this.handleChange}
                                        defaultValue={this.state.date || null}
                                    />

                                    <Input
                                        label="Breve descrição"
                                        type="text"
                                        floatingLabel={true}
                                        required={true}
                                        id="descricao"
                                        name="descricao"
                                        autoComplete="false"
                                        formNoValidate={false}
                                        maxLength={200}
                                        autoCapitalize="true"
                                        autoCorrect="false"
                                        onChange={this.handleChange}
                                        defaultValue={this.state.subtitle}
                                    />

                                    <Textarea
                                        label="Texto do evento"
                                        floatingLabel={true}
                                        required={true}
                                        id="texto"
                                        name="content"
                                        autoComplete="false"
                                        autoCapitalize="true"
                                        autoCorrect="false"
                                        onChange={this.handleChange}
                                        defaultValue={this.state.content}
                                    />

                                    {this.state.images.length > 0 &&
                                        <div className="images-container">

                                            {this.state.images.map((imagem, index) => (
                                                <img
                                                    width={80}
                                                    height={70}
                                                    key={index}
                                                    src={imagem.src}
                                                    className="imagens"
                                                    alt="imagens"
                                                />
                                            ))}

                                        </div>
                                    }

                                    <div className="file-container">
                                        <Input
                                            type="file"
                                            id="imgCapa"
                                            name="mainImage"
                                            required={true}
                                            onChange={this.handleChange}
                                            defaultValue={this.state.mainImage}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="advance"
                                        style={{ width: 120 }}
                                    >
                                        AVANÇAR
                                        <FontAwesomeIcon
                                            icon="arrow-right"
                                            size='2x'
                                            color='#fff'
                                        />
                                    </button>

                                </form>

                            </div>

                        </React.Fragment>
                        :
                        <div className="flex column align-center no-adm-content">
                            <div className="user-content">
                                <h1>Você não é administrador</h1>
                                <h3>
                                    Caso possua um usuário e senha de administrador, clique no botão
                                    abaixo para efetuar o login.
                            </h3>

                                <Link to="/adm">
                                    <button
                                        type="button"
                                        className="advance"
                                        style={{ width: 180 }}
                                    >
                                        <FontAwesomeIcon
                                            color='#fff'
                                            size='2x'
                                            icon='user-cog'
                                        />
                                        LOGAR COMO ADM
                                </button>
                                </Link>
                            </div>
                        </div>
                }

                <Footer />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    listaNoticias: state.noticias.listaNoticias,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    cadastrarPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AcoesEvento)