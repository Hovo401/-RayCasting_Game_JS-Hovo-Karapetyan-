import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

import GameOnline from './GameOnline.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('static'));

const gameOnline = new GameOnline(io);



server.listen(PORT, () => {
  console.log(`server running at port - ${PORT}`);
});