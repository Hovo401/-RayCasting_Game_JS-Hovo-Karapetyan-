import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

import GameOnline from './GameOnline.js';


const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

app.use(express.static('static'));
// const gameOnline = new GameOnline(io);



const port = 3000;
app.listen(port, () => {
  console.log(`Server open ${port}`);
});