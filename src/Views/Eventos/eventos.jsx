import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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

                            {this.props.noticia === null ?
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
                                                        src="https://queconceito.com.br/wp-content/uploads/evento.jpg"
                                                        alt=""
                                                        className="image"
                                                    />
                                                    <div className="p-6">
                                                        <p className="post-title">{noticia.title.rendered}</p>
                                                        <p className="post-desc"> {noticia.excerpt.rendered} </p>
                                                    </div>
                                                    <button onClick={() => { this.props.definirPost(noticia) }}>
                                                        <p>Ver mais</p>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
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

                                            <p className="titulo">{this.props.noticia.title.rendered}</p>
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
                                                <th>Evento</th>
                                                <th>Data</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.listaNoticias.map((noticia, index) => (
                                                <tr key={index}>
                                                    <td> Título que você deu para a Notícia </td>
                                                    <td> 04/06/2019 </td>

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