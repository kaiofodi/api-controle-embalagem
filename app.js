import express from 'express';
import embalagemRoutes from './routes/embalagemRoutes.js';
import maquinaRoutes from './routes/maquinaRoutes.js';
import operadorRoutes from './routes/operadorRoutes.js';
import conexao from './database/conexao.js';
import { log } from 'node:console';

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use('/embalagens', embalagemRoutes);
app.use('/maquinas', maquinaRoutes);
app.use('/operadores', operadorRoutes);

async function iniciarServer() {
    try{
        const testConexao = await conexao.getConnection();
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`)
        });
    } catch (error) {
        console.log('Erro ao iniciar o servidor:', error);
    }
}

iniciarServer();
