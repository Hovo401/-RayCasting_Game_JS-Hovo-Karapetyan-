export default class GameObject {
    constructor(e = {}) {
        this._position = this.isPoition(e?.position) ? e.position : { x: 0, y: 0, z: 0 };
        this._rotation = this.isRotation(e?.rotation) ? e.rotation : { horizon: 0, vertical: 0 };
        this.mash = null;
        this.collision = null;
        this.children = [];
        this.name = e?.name ?? 'GObj';
        this.id = e?.id ?? this.name + Math.random() + '|' + Date.now();

        this.isRendring = true;
        this.texture = e?.texture ?? null; // img
    }
    get position (){
        return this._position;
    }
    set position(pos){
        if (pos?.x) this._position.x = pos.x;
        if (pos?.y) this._position.y = pos.y;
        if (pos?.z) this._position.z = pos.z;
        
        this.mash?.RMashPosCal();
    }

    get rotation (){
        return this._rotation;
    }
    set rotation(rot) {
        if (rot?.horizon !== undefined) this._rotation.horizon = rot.horizon;
        if (rot?.vertical !== undefined) this._rotation.vertical = rot.vertical;

        this.mash?.RMashPosCal();
    }
    
    get rotationHorizon(){
        return this._rotation.horizon;
    }
    get rotationVertical(){
        return this._rotation.vertical;
    }
    set rotationHorizon(horizon) {
        this._rotation.horizon = horizon;
        this.mash?.RMashPosCal();
    }
    set rotationVertical(vertical) {
        this._rotation.vertical = vertical;
        this.mash?.RMashPosCal();
    }

    
    get positionX(){
        return this._position.x;
    }
    get positionY(){
        return this._position.vertical;
    }
    get positionZ(){
        return this._position.vertical;
    }
    set positionX(x) {
        this._position.x = x;
        this.mash?.RMashPosCal();
    }
    set positionY(y) {
        this._position.y = y;
        this.mash?.RMashPosCal();
    }
    set positionZ(z) {
        this._position.z = z;
        this.mash?.RMashPosCal();
    }

    start(){

    }
    upDate(){
        
    }


    isPoition(position){
        return typeof position?.x === 'number' && typeof position?.y === 'number' && typeof position?.z === 'number';
    }
    isRotation(rotation){
        return typeof rotation?.horizon === 'number' && typeof rotation?.vertical === 'number';
    }
}