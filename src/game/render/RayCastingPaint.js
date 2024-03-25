import RayCatsting from "./RayCatsting.js"; 

export default class RayCastingPaint extends RayCatsting{
    constructor(e){
        super(e);
    }
    PaintUpDate(){
        var y_start = window.innerHeight  / 1.5 ;

        const delta = this.canvas.width / this.c.NUM_RAYS;
        for (let i = 0; i < this.rayMatrix.length; ++i){
            var ray = this.rayMatrix[i][0]
            // for(let j = rayArr[i].length -1; j >= 0; j--){

                const color = [  (Math.log10(ray.distance) *100 )] ;

                this.ctx.fillStyle = `rgb( ${color[0]}, ${color[0]}, ${color[0]} )`;
                
                
                var proekcia = ray.distance;
                proekcia *= Math.cos(this.c.rotation.horizon - ray.rayDeltaAngle );
                proekcia = (this.c.d  / proekcia * 80);
                
                this.ctx.fillRect(delta * i , this.canvas.height / 2 *  this.c.rotation.vertical   -  proekcia * this.c.position.z, delta+1,  proekcia  );

            // }

        }
    }
}