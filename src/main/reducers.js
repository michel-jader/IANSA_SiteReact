import { combineReducers } from 'redux'
import eventosReducer from '../reducers/eventosReducer';
import loginReducer from '../reducers/loginReducer';

const reducerRaiz = combineReducers({
    noticias: eventosReducer,
    loginReducer
})

export default reducerRaiz