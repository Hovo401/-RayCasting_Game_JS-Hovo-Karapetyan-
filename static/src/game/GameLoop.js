import Render from './render/Render.js';
import SceneMeneger from './scene/SceneMeneger.js';
import Time from './utils/Time.js';
import DownladMeneger from './utils/DownladMeneger.js';
import OnlineSocketController from '../moduls/OnlineSocketController.js';

export default class GameLoop { // singleton
    constructor() {
        if (GameLoop.ex) {
            return GameLoop.ex;
        }
        GameLoop.ex = this;

        this.onlineSocketController = null;
        this.isPlay = true;
        this.DownladMeneger = new DownladMeneger();
        this.render = new Render({ player: this.player });
    }

    async start() {
        SceneMeneger.scene.dynamicObj.forEach((e) => {
            e.start();
        });
        this.onlineSocketController = new OnlineSocketController();
        this.DownladMeneger.onProgress = (imagesLoaded, totalImages) => {
            // console.log(imagesLoaded, totalImages);
        }

        this.DownladMeneger.onComplete = () => {

            this.upDate();

        }


    }

    upDate() {

        this.onlineSocketController.reqGameUserDate();

        SceneMeneger.scene.dynamicObj.forEach((e) => {
            e.upDate();
        });

        this.render.upDate();

        Time.update();

        requestAnimationFrame(this.upDate.bind(this));
        // setTimeout(this.upDate.bind(this), 0);
        if (!this.isPlay) return;
    }
}