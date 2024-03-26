import GameDynamicObject from "./ex/GameDynamicObject.js";
import Mash from "../components/Mash.js";

export default class SharIsMash extends GameDynamicObject {
    constructor(e) {
        super(e);
        this.name = this.name = e?.name ?? 'share';
        this.mash = new Mash({GObj: this,
            mash:this.generateCircleCoordinates(0, 0, e?.radius ?? 8, e?.MashQuantity ?? 30),
            texturingMetod: e?.texturingMetod ?? 'full',
        });
    }
    generateCircleCoordinates(centerX, centerY, radius, numPoints) {
        var coordinates = [];
        var angleIncrement = (2 * Math.PI) / numPoints;
        
        for (var i = 0; i < numPoints; i++) {
            var angle = i * angleIncrement;
            var x = centerX + radius * Math.cos(angle);
            var y = centerY + radius * Math.sin(angle);
            coordinates.push([x, y]);
        }
        return coordinates;
    }
}