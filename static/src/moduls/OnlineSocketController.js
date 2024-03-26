import SceneMeneger from '../game/scene/SceneMeneger.js'
const g = io(); 

export default class OnlineSocketController{
    constructor(){
        if(OnlineSocketController.ex){
            return OnlineSocketController.ex;
        }
        OnlineSocketController.ex = this;
        
        this.player = SceneMeneger.scene.getDynamicObjByName('player')


        this.socket = io.connect('https://orange-couscous-q5x4q6x4q4r29q6g-3000.app.github.dev/socket.io/?EIO=4&transport=polling&t=Ovw_JLH');
        
        this.socket.on('connection', () => {
            console.log('Connected to server');
        
        })
        
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
