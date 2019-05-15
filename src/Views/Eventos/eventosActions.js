export const definirPost = (noticia) => (dispatch) => {
    console.log(noticia)
    dispatch({
        type: 'DEFINIR_POST',
        payload: noticia
    })
}