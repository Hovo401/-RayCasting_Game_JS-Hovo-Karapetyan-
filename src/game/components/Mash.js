export default class Mash {
    constructor({GObj, mash}) {
        this.MyGObj = GObj;
        this.mash = mash;
        this.RMashPos = structuredClone(mash);
        this.RMashPosCal();
    }
    RMashPosCal(){
        if(!this.mash || !Array.isArray(this.mash) || this.mash.length === 0) return;

        this.RMashPos.forEach((e,i)=>{
            this.RMashPos[i] = [
                this.mash[i][0] * Math.cos(this.MyGObj.rotation.horizon) - this.mash[i][1] * Math.sin(this.MyGObj.rotation.horizon) + this.MyGObj.position.x, 
                this.mash[i][0] * Math.sin(this.MyGObj.rotation.horizon) + this.mash[i][1] * Math.cos(this.MyGObj.rotation.horizon) + this.MyGObj.position.y
            ]
        })
    }
}