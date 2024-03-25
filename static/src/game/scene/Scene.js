import Camera from "./Camera.js";

export default class Scene {
    constructor() {
        this.staticObj = new Map();
        this.dynamicObj = new Map();
        this.subObjs = [this.staticObj, this.dynamicObj];
        this.camera = new Camera({
            position: { x: 25, y: 25, z: 0 },
            rotation: { horizon: 0, vertical: 0 }
        });
    }

    getDynamicObjByName(name){
        return this.dynamicObj.get(name);
    }

    addObject(obj, statice = false) {
        if(statice){
            this.staticObj.set(obj.name, obj);
        }else{
            
            this.dynamicObj.set(obj.name, obj);
        }
    }

    addObjectArray(objs, statice = false) {
        if(statice){
            objs.forEach( obj => {
                this.staticObj.set(obj.name, obj);
            });
        }else{
            objs.forEach( obj => {
                this.dynamicObj.set(obj.name, obj);
            });
        }
    }
}
