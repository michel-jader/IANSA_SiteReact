import { combineReducers } from 'redux'
import eventosReducer from '../Views/Eventos/eventosReducer';

const reducerRaiz = combineReducers({
    noticias: eventosReducer
})

export default reducerRaiz