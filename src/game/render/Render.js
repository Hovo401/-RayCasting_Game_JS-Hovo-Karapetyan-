
import RayCatsting from './RayCatsting.js';
import Time from '../utils/Time.js';

export default class Render extends RayCatsting {
    constructor({player}){
        super();
        this.player = player;
        
    }

    

    upDate(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // background
        this.ctx.fillStyle = 'rgb(40,40,40)'; // Цвет заливки
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        

        

        this.RayCatsting( this.player);
        // world map
        this.fps(Time.getFPS());
        // this.map_world();
    }

    fps(fps){
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(fps, this.canvas.width - 60, 30);
    }

    // map_world(){
    //     const mashtab = 1.5;
    //     const y_start = window.innerHeight - (mapArr.length * mash) / mashtab ;
    //     this.ctx.fillStyle = 'rgb(40,100,40)';
    //     for (let el of staticObj){
    //         this.ctx.fillRect(el.xy[0] / mashtab, y_start + el.xy[1] / mashtab, el.xy[2] / mashtab, el.xy[3] / mashtab);
    //     }
    //     this.ctx.fillStyle = 'rgb(20,100,40)';
    //     this.ctx.fillRect((this.player.position.x - mash/2 + 5) / mashtab, y_start + (this.player.position.y - mash / 2 + 5) / mashtab, 10/mashtab, 10/mashtab);
    //     this.line(  this.player.position.x/ mashtab, y_start + this.player.position.y/ mashtab, (this.player.position.x + Math.cos( this.player.angle) * 30)/ mashtab,y_start + (this.player.position.y + Math.sin(this.player.angle) * 30)/ mashtab, 'rgb(0,0,255)', 4);
    // }
}