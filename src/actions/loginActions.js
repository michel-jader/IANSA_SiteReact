
export const logar = (usuario, senha) => (dispatch) => {
    dispatch(switch_loading(true))
    setTimeout(() => {
        if (usuario === 'iansaADM' && senha === 'iansa2019ADM') {
            dispatch(logado(true))
            sessionStorage.setItem('admLogado', 'true')
            dispatch(switch_loading(false))
            dispatch(handle_status('sucesso'))
        } else {
            dispatch(switch_loading(false))
            dispatch(handle_status('falha'))
        }
    }, 2000);
}

export const deslogar = () => async (dispatch) => {
    dispatch(switch_loading(true))
    await sessionStorage.removeItem('admLogado')
    setTimeout(() => {
        dispatch(logado(false))
        dispatch(switch_loading(false))
    }, 1000);
}

export const logado = (value) => ({ type: 'VERIFICAR_LOGADO', payload: value })

export const switch_loading = (value) => ({ type: 'LOADING', payload: value })

export const handle_status = (result) => ({
    type: 'STATUS',
    payload: result
})