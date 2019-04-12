import React from 'react';
import './Andamento.css';
// import '../../main/App.css';
import Container from '../../components/Container/Container';
import workingSvg from '../../utils/imgs/working.svg'

export default () => (
    <Container classe="andamento_background">
        <div className="and-content">
            <img src={workingSvg} alt="" className="anda-img" />
            <h1>Ops! Ainda estamos trabalhando nessa parte. Mas fique tranquilo que em breve tudo estará prontinho!</h1>
        </div>
    </Container>
)