export const definirPost = (noticia) => (dispatch) => {
    dispatch({
        type: 'DEFINIR_POST',
        payload: noticia
    })
}