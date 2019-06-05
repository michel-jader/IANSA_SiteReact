const INITIAL_STATE = {
    listaNoticias: [
        {
            id: '001',
            data: '04/05/2019',
            titulo: 'Primeira notícia do site a ser mostrada',
            descricao: 'Essa é a primeira notícia a ser mostrada na listagem de eventos do site IANSA.',
            imagemCapa: 'https://queconceito.com.br/wp-content/uploads/evento.jpg',
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imagens: []
        },
        {
            id: '002',
            data: '01/06/2019',
            titulo: 'Segunda notícia do site a ser mostrada',
            descricao: 'Essa é a segunda notícia a ser mostrada na listagem de eventos do site IANSA.',
            imagemCapa: 'https://www.viaondas.com.br/wp-content/uploads/2016/10/organizacion-de-eventos.jpg',
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imagens: []
        },
        {
            id: '003',
            data: '02/04/2019',
            titulo: 'Terceira notícia do site a ser mostrada',
            descricao: 'Essa é a terceira notícia a ser mostrada na listagem de eventos do site IANSA.',
            imagemCapa: 'https://portal.comunique-se.com.br/wp-content/uploads/2017/01/palestrantes-para-seu-evento.jpg',
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imagens: []
        }
    ],
    noticia: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DEFINIR_POST':
            return { ...state, noticia: action.payload }
        default:
            return state
    }
}