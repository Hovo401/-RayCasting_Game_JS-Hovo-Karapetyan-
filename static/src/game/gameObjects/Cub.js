import GameDynamicObject from "./ex/GameDynamicObject.js";
import Mash from "../components/Mash.js";

export default class Cub extends GameDynamicObject {
    constructor(e) {
        super(e);

        this.mash = new Mash({
            GObj: this,
            mashHeight: e?.mashHeight,
            mash: [
                [-1, -1],
                [1, -1],
                [1, 1],
                [-1, 1]
            ],
        });
    }
}