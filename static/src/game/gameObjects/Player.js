import Cub from './Cub.js';

import Physics from '../components/Physics.js';
import SceneMeneger from '../scene/SceneMeneger.js';
import UserPlayerControl from '../components/UserPlayerControl.js';

export default class Player extends Cub {
    constructor(e) {
        super(e);
        this.name = 'player';
        
        this.mash.isRendring = false;

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
