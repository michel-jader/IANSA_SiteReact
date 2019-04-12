import React from 'react';
import './Servicos.css';
import '../../main/App.css';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

export default props =>

    <Container classe='servicos_background'>
        <div className="flex column align-center" style={{ marginTop: 50 }}>

            <div className="flex column t-center title-container">
                <h1>Nossos Serviços</h1>
                <h3>O IANSA acolhe as pessos da melhor forma possível, transformando um momento delicado em esperança e carinho.</h3>
            </div>

            <div className="card-wrapper flex row align-center">

                <Card
                    icon="utensils"
                    title="REFEIÇÕES"
                    subtitle="Oferecemos refeições toda a qualidade, carinho e cuidados 
                            que nossos beneficiários merecem e necessitam. "
                />

                <Card
                    icon="bed"
                    title="DORMITÓRIOS"
                    subtitle="Acomodações para os beneficiários e familiares 
                    trazendo conforto e descanso necessários."
                />

                <Card
                    icon="bus"
                    title="TRANSLADO"
                    subtitle="Disponibilizamos aos familiares e benefeciários
                    translado entre o Hospital do Câncer e o IANSA no horário do almoço."
                />

                <Card
                    icon="child"
                    title="ATIVIDADES"
                    subtitle="Realização de oficinas e atividades
                     para entretenimento e aprendizado."
                />

                <Card
                    icon="gift"
                    title="BIBLIOTECA"
                    subtitle="Espaço destinado à leitura com diversos livros
                    e revistas para o aprendizado e entretenimento"
                />

                <Card
                    icon="book"
                    title="BAZAR E EVENTOS"
                    subtitle="Possuímos um brexó e também realizamos 
                    eventos em prol do IANSA para
                    arrecadação de fundos e doações."
                />

            </div>

        </div>
        <Footer/>
    </Container>