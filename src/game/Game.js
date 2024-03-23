import Render from './render/Render.js';
import MS from './scene/MS.js';
import Time from './utils/Time.js';


export default class Game { // singleton
    constructor() {
        if(Game.ex){
            return Game.ex;
        }
        Game.ex = this;

        this.isPlay = true;
        
        this.render = new Render({ player: this.player });
    }

    start(){
        MS.scene.dynamicObj.forEach((e)=>{
            e.start();
        });
        this.upDate();
    }

    upDate() {
        requestAnimationFrame(this.upDate.bind(this));
        // setTimeout(this.upDate.bind(this), 0);
        if (!this.isPlay) return;

        MS.scene.dynamicObj.forEach((e)=>{
            e.upDate();
        });

        this.render.upDate();
        
        Time.update();
    }
}