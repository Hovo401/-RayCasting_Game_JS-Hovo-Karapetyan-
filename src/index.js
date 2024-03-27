import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

import GameOnline from './GameOnline.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('static'));

const gameOnline = new GameOnline(io);



const port = 3000;
server.listen(3000, () => {
  console.log(`server running at port - ${port}`);
});