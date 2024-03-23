export default class GameObject {
    constructor(e) {
        this._position = this.isPoition(e?.position) ? e.position : { x: 0, y: 0, z: 0 };
        this._rotation = this.isRotation(e?.rotation) ? e.rotation : { horizon: 0, vertical: 0 };
        this.mash = null;
        this.collision = null;
    }
    get position (){
        return this._position;
    }
    set position({x, y, z}){
        if (x) this._position.x = x;
        if (y) this._position.y = y;
        if (z) this._position.z = z;
        
        this.mash?.RMashPosCal();
    }

    get rotation (){
        return this._rotation;
    }
    set rotation ({horizon, vertical}){
        if (horizon) this._rotation.horizon = horizon;
        if (vertical) this._rotation.vertical = vertical;

        this.mash?.RMashPosCal();
    }

    isPoition(position){
        return typeof position?.x === 'number' && typeof position?.y === 'number' && typeof position?.z === 'number';
    }
    isRotation(rotation){
        return typeof rotation?.horizon === 'number' && typeof rotation?.vertical === 'number';
    }
}