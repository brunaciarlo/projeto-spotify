import express from 'express';
import { db } from './connect.js';
import cors from "cors";
import path from 'path';

const app = express();
const PORT = 3001;
const __dirname = path.resolve();

app.use(cors());

app.get('/api/', (request, response) => {
    response.send('Atualizar');
})

app.get('/api/artists', async(request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
})

app.get('/api/songs', async(request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
})

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
    console.log("Servidor está escutando na porta " + PORT);
})