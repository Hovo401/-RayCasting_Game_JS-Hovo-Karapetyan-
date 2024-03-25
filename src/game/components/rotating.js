import Component from "./ex/Component.js";

export default class Rotating extends Component{
    constructor(e){
        super(e);
        this.name = 'rotating';
    }
    upDate(){
        // this.GObj.rotationHorizon +=  this.GObj.Time.deltaTime * Math.PI / 10 ;
    }
}