import Player from "./Player.js";
import PlayerData from "./Player.js";

export default class GameOnline {
    constructor(io){
        if(GameOnline.ex){
            return GameOnline.ex;
        }
        GameOnline.ex = this;

        this.players = {};



        io.on('connection', (socket) => {
          const sesionId = socket.id;
          console.log('New client connected', sesionId);
          
          this.players[sesionId] =  new PlayerData(sesionId, socket);
          
          // this.players[sesionId].socket().emit(sesionId, sesionId);

          socket.on('reqGameUserDate', (reqGameUserData) => {
              const dataPars = JSON.parse(reqGameUserData);
              
              this.players[sesionId].data.position = dataPars.position;
              this.players[sesionId].data.rotation = dataPars.rotation;
              this.players[sesionId].socket().emit('clientData', JSON.stringify(this.players));
          });
        
          socket.on('disconnect', () => {
            console.log('Client disconnected', sesionId);

            delete this.players[sesionId];
            for(let key in this.players){
              this.players[key].socket().emit('userDisconect', sesionId)
            }
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
