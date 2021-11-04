import axios from 'axios'
const api = axios.create({
    baseURL : 'http://localhost:3030/'
})


export default class Api{

    async ListaProdutos (){
        let r = await api.get('/produto')
        return r.data; 
    }



 async CadastraProduto(ds_codigo_interno, nm_produto, id_categoria, nr_estoque_minimo, nr_estoque_maximo, vl_valor ,nr_estoque_atual, ds_descricao){
    let r = await api.post('/produto', {ds_codigo_interno, nm_produto, id_categoria, nr_estoque_minimo, nr_estoque_maximo, nr_estoque_atual, ds_descricao})
    return r.data; 
    }
}

