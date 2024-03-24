import Component from "./Component.js";

export default class Mash extends Component{
    constructor(e) {
        super(e);
        this.mash = e.mash;
        this.RMashPos = structuredClone(e.mash);
        this.RMashPosCal();
        this.isRendring = e?.isRendring ? e.isRendring :true;
    }
    RMashPosCal(){
        if(!this.mash || !Array.isArray(this.mash) || this.mash.length === 0) return;

        this.RMashPos.forEach((e,i)=>{
            this.RMashPos[i] = [
                this.mash[i][0] * Math.cos(this.GObj.rotation.horizon) - this.mash[i][1] * Math.sin(this.GObj.rotation.horizon) + this.GObj.position.x, 
                this.mash[i][0] * Math.sin(this.GObj.rotation.horizon) + this.mash[i][1] * Math.cos(this.GObj.rotation.horizon) + this.GObj.position.y
            ]
        })
    }
}