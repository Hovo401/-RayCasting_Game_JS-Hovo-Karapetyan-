import GAPI from './game/GAPI.js';


class App {
    constructor() {
        this.GameLoop = new GAPI.GameLoop();
    }
    start() {
        var el = new GAPI.GObjs.Cub({
            position: { x: 70, y: 70, z: 5 },
            rotation: { horizon: 1, vertical: 0 },
            name:'d'
        })
        el.addComponent(new GAPI.comps.Rotating({GObj: el}))
        GAPI.MS.scene.addObject(el);

        var el1 = new GAPI.GObjs.Cub({
            position: { x: 120, y: 120, z: 5 },
            rotation: { horizon: 1, vertical: 0 },
            name:'k'
        })
        el1.addComponent(new GAPI.comps.Rotating({GObj: el1}))
        GAPI.MS.scene.addObject(el1);

        GAPI.MS.scene.addObject(new GAPI.GObjs.Player({name:'player'}));
        GAPI.utils.MapCreator.addTestMap();

        console.log(
            GAPI.MS.scene.dynamicObj

        )

        this.GameLoop.start();
    }
}

const app = new App();
app.start();