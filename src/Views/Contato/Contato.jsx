import React from 'react';
import './Contato.css'
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Input from 'muicss/lib/react/input';
import TextArea from 'muicss/lib/react/textarea';
import Form from 'muicss/lib/react/form';
import Footer from '../../components/Footer/Footer';

export default props =>
    <Container classe='contato_background'>

        <div className="flex column align-center contato-content">

            <div className="flex column t-center title-container">
                <h1>Entre em contato</h1>
                <h3>Conheça o IANSA e venha nos ajudar a melhorar a vida destas pessoas!</h3>
            </div>
            <div className="content">
                <Form
                    style={{ width: '100%' }}
                    action="https://script.google.com/macros/s/AKfycbyp2Zk7JJ_n8_Kd-c3Kjlco_wES21A6oaRbCrbcTtw6HwogD6Wm/exec"
                    method="post"
                    autoComplete="false"
                >
                    <div className="flex-row">

                        <div className="input-wrapper mr-5">
                            <Input
                                label="Nome"
                                type="text"
                                floatingLabel={true}
                                required={true}
                                id="name"
                                name="name"
                                autoComplete="false"
                            />
                        </div>

                        <div className="input-wrapper ml-5">
                            <Input
                                label="Email"
                                type="email"
                                floatingLabel={true}
                                required={true}
                                id="email"
                                name="email"
                                autoComplete="false"
                            />
                        </div>
                    </div>

                    <div className="text-area-wrapper">
                        <TextArea
                            label="Mensagem"
                            floatingLabel={true}
                            required={true}
                            id="message"
                            name="message"
                        />
                    </div>

                    <button type="submit" className="form-btn">
                        <p> ENVIAR </p>
                    </button>

                </Form>
            </div>
        </div>
        <Footer />
    </Container>