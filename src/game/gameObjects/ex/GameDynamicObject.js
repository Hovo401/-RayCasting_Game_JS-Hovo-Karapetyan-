import GameObject from "./GameObject.js";
import Time from "../../utils/Time.js";

export default class GameDynamicObject extends GameObject{
    constructor(e){
        super(e);
        this.Time = Time;
        this.components = new Map();
    }

    start (){
        this.components.forEach(comp=>{
            comp.start();
        });
    }
    upDate (){
        this.components.forEach(comp=>{
            comp.upDate();
        });
    }

    getComponent(key){
        return this.components.get(key);
    }

    deleteComponent(key){
        this.components.delete(key);
    }

    addComponent(component, name) {
        component.GObj = this;
        name = name ?? component.name;
        if (!this.components.has(name)) {
            this.components.set(name, component);
        } else {
            console.error(`Component with name ${name} already exists.`);
        }
        return this;
    }
}