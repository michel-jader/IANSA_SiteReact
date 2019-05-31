import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import Input from 'muicss/lib/react/input'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logar, switch_loading, handle_status } from '../../actions/loginActions';
import Loading from '../../components/loading/Loading';
import './Login.css'
import '../../main/App.css'
import Modal from '../../components/Modal/Modal';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: null,
            senha: null,
            errosForm: {
                usuario: "",
                senha: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.logar(this.state.usuario, this.state.senha)
    }

    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        let formErrors = { ...this.state.errosForm };

        switch (name) {
            case "usuario":
                formErrors.usuario =
                    value.length < 5 ? "O usuário possui mais de 5 caracteres" : "";
                break;
            case "senha":
                formErrors.senha =
                    value.length < 5 ? "Senha maior que 5 caracteres" : ""
                break;
            default:
                break
        }

        this.setState({ formErrors, [name]: value })
    };

    handleErro() {
        this.props.handle_status(null);
        this.setState({
            usuario: null,
            senha: null
        })
    }

    render() {
        return (
            <Container classe="home_container login_background">

                <Loading
                    visivel={this.props.loading ? true : false}
                />

                <Modal
                    status={this.props.status}
                    txtSucesso='Você agora está logado como Administrador!'
                    txtErro='Verifique o usuário e senha digitados e também sua conexão com a internet.'
                    acaoErro={() => this.handleErro()}
                />

                <div className="flex column align-center">

                    <div className="flex column t-center title-container">
                        <h1>Entrar como Administrador</h1>
                        <h3>Caso possua um usuário e uma senha, entre no site como administrador</h3>
                    </div>

                    <div className="content">

                        <div className="login-card">

                            <form
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onSubmit={this.handleSubmit}
                                autoComplete="false"
                            >

                                <p className="title-p">Login</p>

                                <Input
                                    label="Usuário"
                                    type="text"
                                    floatingLabel={true}
                                    required={true}
                                    id="usuario"
                                    name="usuario"
                                    autoComplete="false"
                                    formNoValidate={false}
                                    onChange={this.handleChange}
                                />

                                <Input
                                    label="Senha"
                                    type="password"
                                    floatingLabel={true}
                                    required={true}
                                    id="senha"
                                    name="senha"
                                    autoComplete="false"
                                    onChange={this.handleChange}
                                />

                                <button
                                    type="submit"
                                    className="login-button">
                                    ENTRAR
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

            </Container>

        )
    }
}

const mapStateToProps = state => ({
    loading: state.loginReducer.loading,
    status: state.loginReducer.status
})

const mapDispatchToProps = dispatch => bindActionCreators({
    logar,
    switch_loading,
    handle_status
},
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Login)