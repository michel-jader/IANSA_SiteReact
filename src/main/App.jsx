import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';

import Toolbar from '../components/Toolbar/Toolbar';
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';
import BackDrop from '../components/BackDrop/Backdrop'
import Routes from './Routes';

library.add(
fab,
faIcons.faBars,
faIcons.faArrowCircleLeft,
faIcons.faCheck,
faIcons.faUtensils,
faIcons.faBed,
faIcons.faBus,
faIcons.faChild,
faIcons.faGift,
faIcons.faBook,
faIcons.faExclamationCircle,
faIcons.faUserCog,
faIcons.faTrashAlt,
faIcons.faEdit,
faIcons.faPlus,
faIcons.faLongArrowAltLeft,
faIcons.faTimes,
faIcons.faArrowCircleRight,
faIcons.faArrowRight,
faIcons.faFolderOpen,
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
