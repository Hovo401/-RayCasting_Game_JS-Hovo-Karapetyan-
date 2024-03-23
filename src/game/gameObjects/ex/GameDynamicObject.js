import GameObject from "./GameObject.js";
import Time from "../../utils/Time.js";

export default class GameDynamicObject extends GameObject{
    constructor(e){
        super(e);
        this.Time = Time;
        this.components = {};
        this.componentsNames = [];
    }

    start (){
        this.componentsNames.forEach(e=>{
            components[e].start();
        });
    }
    upDate (){
        this.componentsNames.forEach(e=>{
            components[e].upDate();
        });
    }

    addComponent(component) {
        if (!this.components[component.name]) {
            if (component.start && typeof component.start === 'function') {
                this.components[component.name] = component;
                this.componentsNames.push(component.name);
            } else {
                console.error(`Component ${component.name} doesn't have a valid start method.`);
            }
        } else {
            console.error(`Component with name ${component.name} already exists.`);
        }
    }
}