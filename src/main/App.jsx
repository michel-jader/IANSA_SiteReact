import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars, faArrowCircleLeft, faCheck, faUtensils,
  faBed, faBus, faChild, faGift, faBook, faExclamationCircle,
  faUserCog, faTrashAlt, faEdit, faPlus, faLongArrowAltLeft,
  faTimes, faArrowCircleRight, faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';

import Toolbar from '../components/Toolbar/Toolbar';
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';
import BackDrop from '../components/BackDrop/Backdrop'
import Routes from './Routes';

library.add(
  fab,
  faBars,
  faArrowCircleLeft,
  faCheck,
  faUtensils,
  faBed,
  faBus,
  faChild,
  faGift,
  faBook,
  faExclamationCircle,
  faUserCog,
  faTrashAlt,
  faEdit,
  faPlus,
  faLongArrowAltLeft,
  faTimes,
  faArrowCircleRight,
  faArrowRight
)

class App extends Component {

  state = {
    menuAberto: false,
    modoAdm: false
  }

  async componentWillMount() {
    let administrador = await sessionStorage.getItem('admLogado')
    this.setState({ modoAdm: administrador })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { menuAberto: !prevState.menuAberto }
    })
  }

  backdropClickHandler = () => {
    this.setState({ menuAberto: false })
  }

  render() {
    let backdrop;

    if (this.state.menuAberto) {
      backdrop = <BackDrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar
            modoAdm={this.state.modoAdm}
            menuClickHandler={this.drawerToggleClickHandler}
          />
          <MenuDrawer
            show={this.state.menuAberto}
            click={this.backdropClickHandler}
          />
          {backdrop}
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
