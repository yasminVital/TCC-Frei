import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = new express()
app.use(cors())
app.use(express.json())

app.post('/login', async (req, resp) => {
    const email = req.body.login;
    const senha = req.body.senha;

    let resp = await db.infoa_sti_cliente.findOne({
        where: {
            ds_email: email,
            ds_senha: senha
        },
        raw: true
    })

    if(resp == null)
    return resp.send({erro: 'tudo errado'});

    resp.sendStatus(200);
});