import axios from "axios";
import { API } from "../environment/api";

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
}

export const listarNoticias = () => async (dispatch) => {
    try {
        const requisicao = await axios.get(`${API}/events`)
        dispatch({
            type: 'LISTAR_POSTAGENS',
            payload: requisicao.data
        });
        console.log(requisicao.data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('DEU CERTO')
    }
}

export const definirPost = (noticia) => (dispatch) => {
    dispatch({
        type: 'DEFINIR_POST',
        payload: noticia
    })
}

export const cadastrarPost = (form) => async (dispatch) => {
    let formulario = new FormData()
    formulario.append('images', form.images)
    formulario.append('title', form.title)
    formulario.append('subtitle', form.subtitle)
    formulario.append('content', form.content)
    formulario.append('mainImage', form.mainImage)
    formulario.append('createdAt', form.date)
    try {
        const requisicao = await axios.post(`${API}/events`, formulario, headers)
        dispatch({
            type: 'CADASTRAR_POST',
            payload: requisicao.data
        })
        console.log(requisicao)
    } catch (error) {
        console.log(error) //COLOCAR UM DISPATCH AQUI
    } finally {
        console.log('TERMINOU') // COLOCAR UM DISPATCH AQUI
    }
}

// export const cadastrarPost = (form) => {
//     axios.post(`${API}/events`, {
//         'title': form.title,
//         'content': form.content,
//         'date': form.date,
//         'subtitle': form.date,
//         'mainImage': form.mainImage
//     }).then(res => {
//         console.log(res)
//     }).catch(error => {
//         console.log(error)
//     })
// }