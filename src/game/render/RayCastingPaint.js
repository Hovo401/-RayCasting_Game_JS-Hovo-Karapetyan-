import RayCatsting from "./RayCatsting.js"; 
import SceneMeneger from "../scene/SceneMeneger.js";

export default class RayCastingPaint extends RayCatsting{
    constructor(e){
        super(e);
    }
    PaintUpDate(){
        var y_start = window.innerHeight  / 1.5 ;

        const delta = this.canvas.width / this.c.NUM_RAYS;
        for (let i = 0; i < this.rayMatrix.length; ++i){
            
            var maxgim = 1;
            var  j = 0;
            // for(let j = this.rayMatrix[i].length -1; j >= 0 ; j--){
            // for(let j =  0; j < this.rayMatrix[i].length; j++){
                var ray = this.rayMatrix[i][j]
                // !GObj.mash?.texturingMetod !== 'segment'
                const color = [  (Math.log10(ray.distance) *100 )] ;

                this.ctx.fillStyle = `rgb( ${color[0]}, ${color[0]}, ${color[0]} )`;
                
                
                var proekcia = ray.distance;
                proekcia *= Math.cos(this.c.rotation.horizon - ray.rayDeltaAngle );
                proekcia = (this.c.d  / proekcia * 80);
                
                if(ray?.GObj?.texture ){
                    this.ctx.drawImage(ray.GObj.texture, 
                        ray.GObj.texture.width / ray.texturProcent * 100 , 0 , 5   , ray.GObj.texture.height,
                        delta * i ,this.canvas.height / 2 *  this.c.rotation.vertical   -  proekcia * this.c.position.z, delta+1,  proekcia,
                        );
                }  
                else{
                    this.ctx.fillRect(delta * i , this.canvas.height / 2 *  this.c.rotation.vertical   -  proekcia * this.c.position.z, delta+1,  proekcia  );
                }

            // }

        }
    }
    segmentPaint(ray){

    }
}