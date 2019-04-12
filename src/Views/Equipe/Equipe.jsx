import React from 'react'
import Container from '../../components/Container/Container';
import './Equipe.css'
import '../../main/App.css';
import pessoa from '../../utils/imgs/pessoa.jpg'
import EquipeCard from './EquipeCard';
import Footer from '../../components/Footer/Footer';

class Equipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selecionado: null
        }
    }

    render() {
        return (
            <Container classe="equipe_background">
                <div className="flex column align-center" style={{ marginTop: 80 }}>
                    <div className="flex column t-center title-container">
                        <h1>Equipe</h1>
                        <h3>Membros da cadeira de direção da instituição</h3>
                    </div>
                    <div className="equipe-content">
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                        <EquipeCard
                            pessoa={pessoa}
                            nome="VALENTINA RIBEIRO"
                            cargo="Diretora"
                        />
                    </div>
                </div>
                <Footer />
            </Container>
        )
    }
}

export default Equipe