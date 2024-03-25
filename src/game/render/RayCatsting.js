import Canvas from './CanvasEx.js';
import SceneMeneger from '../scene/SceneMeneger.js';
import { areCrossing } from './areCrossing.js';
import Ray from './Ray.js';

export default class RayCatsting extends Canvas {
    constructor() {
        super();
        this.c = SceneMeneger.scene.camera;
        this.rayMatrix = [];
    }
    distance(a, b) {
        var dx = b[0] - a[0];
        var dy = b[1] - a[1];
        return Math.sqrt(dx * dx + dy * dy);
    }
    RayCatsting() {
        this.rayMatrix = [];
        var angle = this.c.rotation.horizon - this.c.HALF_FOV;
        for (var i = 0; i < this.c.NUM_RAYS; i++) {
            var xy = 
            [this.c.position.x + this.c.MAX_DEPT * Math.cos(angle),
             this.c.position.y + this.c.MAX_DEPT * Math.sin(angle)]
            

            SceneMeneger.scene.subObjs.forEach(map => {
                map.forEach(GObj => {
                    if (!GObj.isRendring) return;

                    var rMash = GObj.mash.RMashPos;

                    for (let j = 1; j < GObj.mash.RMashPos.length; j++) {
                        var cord = areCrossing([this.c.position.x, this.c.position.y], xy, rMash[j - 1], rMash[j])
                        if (cord !== null) {
                            if (!this.rayMatrix[i]) {
                                this.rayMatrix[i] = [];
                            }
                            this.rayMatrix[i].push(new Ray({ GObj, mashIndex: j, cord,distance: this.distance(cord, [this.c.position.x, this.c.position.y]), rayDeltaAngle: angle}))
                        }
                    }
                    var cord = areCrossing([this.c.position.x, this.c.position.y], xy, rMash[rMash.length-1], rMash[0])
                        if (cord !== null) {
                            if (!this.rayMatrix[i]) {
                                this.rayMatrix[i] = [];
                            }
                            this.rayMatrix[i].push(new Ray({ GObj, mashIndex: 0, cord,distance: this.distance(cord, [this.c.position.x, this.c.position.y]), rayDeltaAngle: angle}))
                        }
                })
            })
            
            if (!this.rayMatrix[i]) {
                this.rayMatrix[i] = [new Ray()];
            }else{
                this.rayMatrix[i].sort(function(a, b){return a.distance - b.distance});
            }

            angle += this.c.DELTA_ANGLE;
        }
    }

}