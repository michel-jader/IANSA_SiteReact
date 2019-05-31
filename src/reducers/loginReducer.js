const INITIAL_STATE = {
    logado: false,
    loading: false,
    status: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VERIFICAR_LOGADO':
            return { ...state, logado: action.payload }
        case 'LOADING':
            return { ...state, loading: action.payload }
        case 'STATUS':
            return { ...state, status: action.payload }
        default:
            return state
    }
}