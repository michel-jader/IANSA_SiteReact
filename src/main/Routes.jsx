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
import Login from '../Views/Login/Login';
import EventoInfo from '../Views/EventoInfo/EventoInfo';
import AcoesEvento from '../Views/AcoesEvento/acoesEvento';

export default () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/servicos" component={Servicos} />
        <Route exact path="/eventos" component={Eventos} />
        <Route path="/eventos/adm/adicionar" component={AcoesEvento} />
        <Route path="/eventos/adm/editar/:id" component={AcoesEvento} />
        <Route path="/eventos/:id" component={EventoInfo} />
        <Route path="/seja-um-mantenedor" component={Mantenedor} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/entre-em-contato" component={Contato} />
        <Route path="/transparencia" component={Andamento} />
        <Route path="/adm" component={Login} />
        <Redirect from="*" to="/" />
    </Switch>