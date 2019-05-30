
export const logar = (usuario, senha) => (dispatch) => {
    console.log(`USUARIO: ${usuario}, SENHA: ${senha}`)
    dispatch(switch_loading(true))
    setTimeout(() => {
        if (usuario === 'iansaADM' && senha === 'iansa2019ADM') {
            dispatch(logado(true))
            dispatch(switch_loading(false))
        } else {
            dispatch(logado(false))
            dispatch(switch_loading(false))
        }
    }, 3000);
}

export const deslogar = () => (dispatch) => {
    dispatch({
        type: 'DESLOGAR',
        payload: false
    })
}

export const logado = (value) => ({ type: 'VERIFICAR_LOGADO', payload: value })

export const switch_loading = (value) => ({ type: 'LOADING', payload: value })