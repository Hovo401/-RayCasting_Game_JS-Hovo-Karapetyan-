export default class Player{
    constructor(sesionId, socket,e){
        this.socket = ()=>{return socket};
        this.sesionId = sesionId // string
        this.data = {
            position: e?.position ?? {x:0, y:0, z:0}, // x, y, z
            rotation: e?.rotation ?? {horizon: 0, vertical: 1} // x, y, z
        }
    }
}