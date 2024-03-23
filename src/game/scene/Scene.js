export default class Scene{
    constructor(){
        this.staticObj = [];
        this.dynamicObj = [];
    }
    
    // Добавление статического объекта в сцену
    addStaticObject(obj) {
        this.staticObj.push(obj);
    }

    // Добавление динамического объекта в сцену
    addDynamicObject(obj) {
        this.dynamicObj.push(obj);
    }
}
