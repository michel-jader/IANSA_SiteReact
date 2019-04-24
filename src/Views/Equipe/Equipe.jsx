import React from 'react'
import Container from '../../components/Container/Container';
import './Equipe.css'
import '../../main/App.css';
import EquipeCard from './EquipeCard';
import Footer from '../../components/Footer/Footer';
import Adriana from "../../utils/imgs/adriana.jpg"
import Angelita from "../../utils/imgs/angelita.jpg"
import Cida from "../../utils/imgs/cida.jpg"
import Claudia from "../../utils/imgs/claudia.jpg"
import Daniel from "../../utils/imgs/daniel.jpg"
import Elaine from "../../utils/imgs/elaine.jpg"
import Eliane from "../../utils/imgs/eliane.jpg"
import Jennifer from "../../utils/imgs/jennifer.jpg"
import Luciana from "../../utils/imgs/luciana.jpg"
import Simone from "../../utils/imgs/simone.jpg"
import Ana from "../../utils/imgs/ana.jpg"

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
                            pessoa={Eliane}
                            nome="ELIANE BONINE"
                            cargo="Fundadora"
                        />
                        <EquipeCard
                            pessoa={Daniel}
                            nome="DANIEL MELO"
                            cargo="Fundador"
                        />
                        <EquipeCard
                            pessoa={Claudia}
                            nome="CLÁUDIA BONINE"
                            cargo="Presidente"
                        />
                        <EquipeCard
                            pessoa={Cida}
                            nome="CIDA HAJEL"
                            cargo="Captadora de Recursos"
                        />
                        <EquipeCard
                            pessoa={Adriana}
                            nome="ADRIANA CRISTINA ALVES BATISTA"
                            cargo="Assistente Social"
                        />
                        <EquipeCard
                            pessoa={Jennifer}
                            nome="JENIFFER BLOIS"
                            cargo="Psicóloga"
                        />
                        <EquipeCard
                            pessoa={Elaine}
                            nome="ELAINE ANDRADE"
                            cargo="Serviços Gerais"
                        />
                        <EquipeCard
                            pessoa={Luciana}
                            nome="LUCIANA NUNES"
                            cargo="Cozinheira"
                        />
                        <EquipeCard
                            pessoa={Angelita}
                            nome="ANGELITA NEVES"
                            cargo="Serviços Gerais"
                        />
                        <EquipeCard
                            pessoa={Simone}
                            nome="SIMONE BONINE"
                            cargo="Serviços Gerais"
                        />
                        <EquipeCard
                            pessoa={Ana}
                            nome="ANA"
                            cargo="Auxiliar Administrativa"
                        />
                    </div>
                </div>
                <Footer />
            </Container>
        )
    }
}

export default Equipe