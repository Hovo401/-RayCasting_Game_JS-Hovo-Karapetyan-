import SceneMeneger from '../game/scene/SceneMeneger.js'


export default class OnlineSocketController{
    constructor(){
        if(OnlineSocketController.ex){
            return OnlineSocketController.ex;
        }
        OnlineSocketController.ex = this;
        
        this.player = SceneMeneger.scene.getDynamicObjByName('player')




    }
    reqGameUserDate(){
        
        // this.socket.emit('reqGameUserDate', 
        // JSON.stringify({
        //     position:this.player.position,
        //     rotation:this.player.rotation
        // })
        // );
    }
}
