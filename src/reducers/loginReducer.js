const INITIAL_STATE = {
    logado: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VERIFICAR_LOGADO':
            return { ...state, logado: action.payload }
        case 'LOADING':
            return { ...state, loading: action.payload }
        default:
            return state
    }
}