import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../Views/Home/Home';
import Sobre from '../Views/Sobre/Sobre';
import Servicos from '../Views/Servicos/Servicos';
import Mantenedor from '../Views/Mantenedor/Mantenedor';
import Contato from '../Views/Contato/Contato';
import Andamento from '../Views/Andamento/Andamento';
import Equipe from '../Views/Equipe/Equipe';
import Eventos from '../Views/Eventos/eventos';

export default () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/eventos" component={Eventos} />
        <Route path="/seja-um-mantenedor" component={Mantenedor} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/entre-em-contato" component={Contato} />
        <Route path="/transparencia" component={Andamento} />
        <Redirect from="*" to="/" />
    </Switch>