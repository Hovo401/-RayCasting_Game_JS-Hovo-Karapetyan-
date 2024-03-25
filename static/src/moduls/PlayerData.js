export default class Player{
    constructor(e){
        this.position = e?.position ?? {x:0, y:0, z:0} // x, y, z
        this.rotation = e?.rotation ?? {horizon: 0, vertical: 1} // x, y, z
    }
}