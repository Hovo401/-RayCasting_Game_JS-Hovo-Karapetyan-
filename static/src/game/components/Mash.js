import Component from "./ex/Component.js";
import {distancePoints} from '../utils/mathFunctions.js';

export default class Mash extends Component{
    constructor(e) {
        super(e);
        this.name = 'mash';
        this.mash = e.mash;
        this.mashHeight = 300;
        this.RMashPos = structuredClone(e.mash);

        this.RFullMashRanges = 0;
        this.RMashRanges = [0];
        this.isRendring = e?.isRendring ?? true;
        this.texturingMetod = e?.texturingMetod ?? 'segment';
        this.texturingMetodList = ['segment','full'];

        this.RMashPosCal();
    }
    RMashRanges_iSum (i){
        return this.RMashRanges.reduce((total, value, index, array)=>{
            if(index < i){
                total += value;
            }
             return total;
        }, 0);
    }
    RMashPosCal(){
        this.RMashPos = structuredClone(this.mash);
        if(!this.mash || !Array.isArray(this.mash) || this.mash.length === 0) return;
        this.RMashRanges = [0];
        this.RFullMashRanges = 0;
        this.RMashPos.forEach((e,i)=>{
            this.RMashPos[i] = [
                this.mash[i][0] * Math.cos(this.GObj.rotation.horizon) - this.mash[i][1] * Math.sin(this.GObj.rotation.horizon) + this.GObj.position.x, 
                this.mash[i][0] * Math.sin(this.GObj.rotation.horizon) + this.mash[i][1] * Math.cos(this.GObj.rotation.horizon) + this.GObj.position.y
            ]
            if(i >= 1){
                this.RMashRanges.push(distancePoints(this.mash[i-1], this.mash[i]));
                this.RFullMashRanges += this.RMashRanges[this.RMashRanges.length - 1]
            }
            if(i == this.RMashPos.length-1){
                this.RMashRanges[0] = distancePoints(this.RMashPos[0], this.RMashPos[this.RMashPos.length-1]);
                this.RFullMashRanges += this.RMashRanges[0];
            }

        })
    }
}