import Canvas from './CanvasEx.js';
import SceneMeneger from '../scene/SceneMeneger.js';
import { areCrossing } from './areCrossing.js';
import Ray from './Ray.js';
import { distancePoints } from '../utils/mathFunctions.js';

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
        


        SceneMeneger.scene.subObjs.forEach(map => {
            map.forEach(GObj => {
                if (!GObj.mash?.isRendring) return;

                GObj.rindringMetaData = {
                    quantityRaysNum: 0,
                    mashQuantityRaysNum:[]
                    
                }

                var rMash = GObj.mash.RMashPos;
                var angle = this.c.rotation.horizon - this.c.HALF_FOV;
                for (var i = 0; i < this.c.NUM_RAYS; i++) {
                    var xy = [
                        this.c.position.x + this.c.MAX_DEPT * Math.cos(angle),
                        this.c.position.y + this.c.MAX_DEPT * Math.sin(angle)
                    ]
                    if (!this.rayMatrix[i]) {
                        this.rayMatrix[i] = [];
                    }

                    

                    var texturProcent = 0;
                    for (let j = 1; j < GObj.mash.RMashPos.length; j++) {
    
                        var cord = areCrossing([this.c.position.x, this.c.position.y], xy, rMash[j - 1], rMash[j])
                        if (cord !== null) {
                            GObj.rindringMetaData.quantityRaysNum += 1;
                            if (!GObj.rindringMetaData.mashQuantityRaysNum[j]) GObj.rindringMetaData.mashQuantityRaysNum[j] = 0;
                            GObj.rindringMetaData.mashQuantityRaysNum[j] +=  1;
                            texturProcent = distancePoints(rMash[j - 1], rMash[j]) / distancePoints(rMash[j], cord) ;
                            this.rayMatrix[i].push(new Ray({ GObj, texturProcent, mashIndex: j, cord, distance: this.distance(cord, [this.c.position.x, this.c.position.y]), rayDeltaAngle: angle }))
                        }
                    }
                    var cord = areCrossing([this.c.position.x, this.c.position.y], xy, rMash[rMash.length - 1], rMash[0])
                    if (cord !== null) {
                        if (!GObj.rindringMetaData.mashQuantityRaysNum[0]) GObj.rindringMetaData.mashQuantityRaysNum[0] = 0;
                            GObj.rindringMetaData.mashQuantityRaysNum[0] +=  1;
                        GObj.rindringMetaData.quantityRaysNum += 1;
                        texturProcent = distancePoints(rMash[0], rMash[rMash.length - 1]) / distancePoints(rMash[0], cord);
                        this.rayMatrix[i].push(new Ray({ GObj, texturProcent, mashIndex: 0, cord, distance: this.distance(cord, [this.c.position.x, this.c.position.y]), rayDeltaAngle: angle }))
                    }
                    angle += this.c.DELTA_ANGLE;
                }
                
               
            })
        })

        for(var i = 0; i < this.c.NUM_RAYS; i++){
            if (this.rayMatrix[i].length === 0) {
                this.rayMatrix[i] = [new Ray()];
            } else {
                this.rayMatrix[i].sort(function (a, b) { return a.distance - b.distance });
            }
        }

    }

}