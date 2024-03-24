import Component from "./Component.js";

export default class Rotating extends Component{
    constructor(e){
        super(e);
    }
    upDate(){
        this.GObj.rotationHorizon +=  this.GObj.Time.deltaTime ;
    }
}