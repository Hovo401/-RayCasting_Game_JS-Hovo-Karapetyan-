export default class ComponentEx{
    constructor(e = {}){
        this.GObj = e?.GObj ?? null;
        this.name = e?.name ?? 'component';
        this.id = e?.id ?? this.name + Math.random() + '|' + Date.now();
        this.use = new Map();
    }
    start(){
    }
    upDate(){
    }

    addUseComponent(component){
        this.use.set(component.name,component);
        return this;
    }
    getUseComponent(name){
        return this.use.get(name);
    }
}