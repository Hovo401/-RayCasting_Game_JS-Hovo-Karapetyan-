import Component from "./ex/Component.js";

export default class Rotating extends Component{
    constructor(e){
        super(e);
        this.name = 'rotating';
        this.speedDeg = e?.speedDeg ?? 90;
        this.deg = 0;
    }
    upDate(){
        this.GObj.rotationHorizon +=  this.GObj.Time.deltaTime * (Math.PI * 2 / 360   * this.speedDeg);
        this.deg += (Math.PI / 180 ) * 90 * this.GObj.Time.deltaTime ;
        this.GObj.positionZ =  1 * Math.sin(this.deg);
    }
}