import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = new express()
app.use(cors())
app.use(express.json())


app.post('/login', async (req, resp) => {


    let login = req.body;

    let p = await db.infoa_sti_cliente.findOne({
        where: {
            ds_email: login.email,
            ds_senha: login.senha
        },
        raw: true
    })

    if(p == null)
    return resp.send({erro: 'tudo errado'});

    resp.sendStatus(200);
});


app.post('/cadastrar', async (req, resp) => {
    let x = req.body;
     
    try {
    const UsuarioCriado= await db.infoa_sti_cliente.create({
        id_endereco: EnderecoCriado.id_endereco,
        nm_nome: x.nome,
        nm_sobrenome: x.sobrenome,
        ds_sexo: x.sexo,
        ds_cpf: x.cpf,
        dt_nascimento: x.nascimento,
        ds_email: x.email,
        ds_senha: x.senha
    })


    const EnderecoCriado = await db.infoa_sti_endereco.create({
        ds_cep: x.cep,
        ds_endereco: x.endereco,
        nr_endereco: x.numero,
        ds_complemento: x.complemento,
        ds_cidade: x.cidade
    })

    resp.send(200);

} catch (error) {
    resp.send( error.toString() )
}
})


app.listen(process.env.PORT,
            console.log(`Servidor na Porta ${process.env.PORT}`));
