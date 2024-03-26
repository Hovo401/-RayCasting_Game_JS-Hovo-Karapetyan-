import PlayerData from "./PlayerData.js";

export default class GameOnline {
    constructor(io){
        if(GameOnline.ex){
            return GameOnline.ex;
        }
        GameOnline.ex = this;

        this.players = new Map();



        io.on('connection', (socket) => {
          console.log('New client connected');
        
          socket.on('reqGameUserData', (reqGameUserData) => {
            console.log('Player position:', reqGameUserData);
            
            // Broadcasting player data to other clients
            socket.broadcast.emit('reqGameOnlineData', JSON.stringify(Array.from(this.players)));
          });
        
          socket.on('disconnect', () => {
            console.log('Client disconnected');
          });
      });
    }
    getUsersDataById(){
      
    }
    setUserData(playerData){
      if (!userData?.id || !playerData?.position || !playerData.rotation) return;
      if (!this.players[userData?.id]){
        this.players[userData?.id] = new PlayerData();
      }
      this.players[userData?.id].position = {...playerData.position};
      this.players[userData?.id].rotation = {...playerData.rotation};
    }
}
