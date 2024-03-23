import GAPI from './game/GAPI.js';

class App{
    constructor(){
        this.game = new  GAPI.Game();
    }
    start() {
        GAPI.MS.scene.addDynamicObject(new GAPI.GObjs.Cub({
            position : {x:0, y:0, z:5},
            rotation: { horizon: 0 , vertical: 0 }
        }));
        
        this.game.start();
    }
}

const app = new App();
app.start();