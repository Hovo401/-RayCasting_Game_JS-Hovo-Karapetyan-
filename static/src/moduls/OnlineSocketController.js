import SceneMeneger from '../game/scene/SceneMeneger.js'
const socket = io(); 

export default class OnlineSocketController{
    constructor(){
        if(OnlineSocketController.ex){
            return OnlineSocketController.ex;
        }
        OnlineSocketController.ex = this;

        this.player = SceneMeneger.scene.getDynamicObjByName('player')

        
    }
    // reqGameUserDate(){
    //     socket.emit('reqGameUserDate', 
    //     JSON.stringify({
    //         position:this.player.position,
    //         rotation:this.player.rotation
    //     })
    //     );
    // }
}