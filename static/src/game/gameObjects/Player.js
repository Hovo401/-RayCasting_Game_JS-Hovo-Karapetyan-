import Mash from "../components/Mash.js";
import GameDynamicObject from './ex/GameDynamicObject.js';

import Physics from '../components/Physics.js';
import SceneMeneger from '../scene/SceneMeneger.js';
import UserPlayerControl from '../components/UserPlayerControl.js';

export default class Player extends GameDynamicObject {
    constructor(e) {
        super(e);
        this.name = 'player';

        this.mash = new Mash({
            GObj: this,
            mash: [
                [-5, -5],
                [10, 0],
                [-5, 5]
            ],
        });

        if (this.mash?.isRendring) {
            this.mash.isRendring = false;
        }



        SceneMeneger.scene.camera.position = this.position;
        SceneMeneger.scene.camera.rotation = this.rotation;

        this.addComponent(
            new Physics({ mass: 80 }), 'physics'
        );
        this.addComponent(
            new UserPlayerControl()
                .addUseComponent(this.getComponent('physics'))
        );
    }
}
