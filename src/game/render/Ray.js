export default class Ray {
    constructor(e = { GObj: null, mashIndex: NaN , cord: [], distance: Infinity, rayDeltaAngle: 0 }){
        this.GObj = e?.GObj ?? null;
        this.mashIndex = e?.mashIndex ?? NaN;
        this.cord = e?.cord ?? [];
        this.distance = e?.distance ?? Infinity;
        this.rayDeltaAngle = e?.rayDeltaAngle ?? 0;
    }
}