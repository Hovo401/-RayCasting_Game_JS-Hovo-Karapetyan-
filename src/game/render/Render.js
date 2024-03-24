
import RayCastingPaint from './rayCastingPaint.js';
import Time from '../utils/Time.js';
import MS from '../scene/MS.js';

// import { areCrossing } from './areCrossing.js';

export default class Render extends RayCastingPaint {
    constructor(){
        super();
        
    }



    upDate(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // background
        this.ctx.fillStyle = 'rgb(40,40,40)'; // Цвет заливки
        this.ctx.fillRect(0, 0, this.canvas.width*2, this.canvas.height);


        this.RayCatsting();
        // world map
        this.fps(Time.getFPS());
        this.map_world();
    }

    fps(fps){
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(fps, this.canvas.width - 60, 30);
    }

    map_world(){
        var mashtab = 1.5;
        // var y_start = window.innerHeight - (mapArr.length * mash) / mashtab ;

        this.ctx.fillStyle = "#FF0000"; // nerqin guyn 
        this.ctx.strokeStyle = "#FF0000";  // koxqi guyn
        this.ctx.lineWidth="0";//koxqi laynutyun


        MS.scene.subObjs.forEach(map =>{
            map.forEach(GObj=>{
                
                var rMash = GObj.mash.RMashPos;
                this.ctx.beginPath();
                this.ctx.moveTo(rMash[0][0], rMash[0][1]);//gci skizb bard gceri hmar
                for (let i = 1; i < GObj.mash.RMashPos.length; i++) {
                    this.ctx.lineTo(rMash[i][0], rMash[i][1]);//gci sharunakutyun@
                }
                
                // this.ctx.lineTo(this.treds[0],this.treds[1])
                
                this.ctx.fill();
                this.ctx.stroke();//nkarir
                this.ctx.beginPath();//gci verg
                
            })
        })
        // console.log(this.rays)
        this.rays.forEach(ray=>{
        //    var raz =  ray.sort(function(a, b){return a.distance - b.distance});
        //    console.log(raz)
            var ra = ray[0]
            // ray.forEach(ra=>{
                // var ra = ray[0]
                if(!ra ||ra.GObj == null ) return;
                // console.log(ray[0])
                
                this.line(this.c.position.x, this.c.position.y, ra.cord[0], ra.cord[1],'#00ff00',1);
            // })
            
        })
        
        // this.ctx.fillRect((this.player.position.x - mash/2 + 5) / mashtab, y_start + (this.player.position.y - mash / 2 + 5) / mashtab, 10/mashtab, 10/mashtab);
        // this.line(  this.player.position.x/ mashtab, y_start + this.player.position.y/ mashtab, (this.player.position.x + Math.cos( this.player.angle) * 30)/ mashtab,y_start + (this.player.position.y + Math.sin(this.player.angle) * 30)/ mashtab, 'rgb(0,0,255)', 4);
    }
}