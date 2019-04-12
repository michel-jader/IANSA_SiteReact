import React from 'react';
import './Home.css'
import logo from '../../utils/imgs/iansa_logotipo.png'

export default () =>
    <div className="home_container home_background">
        <div className="flex-row-center s-b pa-ri-10 min-740">

            <div className="flex-column-center t-center">
                <img src={logo} alt="" className="img-w"></img>
                <p className="rem-1 f5f sniglet" style={{marginTop:10}}>
                    Ser o porto seguro das pessoas em tratamento e suas <br />
                    famílias, acolhendo-as com muito respeito, dignidade,<br />
                    amor e alegria.
                </p>
            </div>
            <div className="flex-column-center m-40 t-center" style={{width:320}}>
                <h2 className="sniglet f5f m-0">FIQUE POR DENTRO DOS EVENTOS DO IANSA</h2>
                <p className="m-0">Veja fotos, notícias e muito mais!</p>
                {/* <p className="m-0">e muito mais</p> */}
                <button className="btn"> <a href="/"> EM BREVE! </a> </button>
            </div>

        </div>

    </div>