import GAPI from './game/GAPI.js';

class App {
    constructor() {
        this.GameLoop = new GAPI.GameLoop();
        
    }
    start() {

        
        new GAPI.utils.DownladMeneger().load([
            {key: 'zemlya', src:'./img/pol.jpg'},
            {key: 'crown', src:'./img/texture/crown.jpg'},
            {key: 'start1_gray_fon', src:'./img/texture/start1_gray_fon.png'},
            {key: 'tower_gray', src:'./img/texture/tower_gray.png'},
            {key: 'wall1', src:'./img/texture/wall1.png'},
            {key: 'wall2', src:'./img/texture/wall2.png'},
        ]);

        GAPI.SceneMeneger.scene.addObject(
            new GAPI.GObjs.Cub({
                position: { x: 70, y: 70, z: 5 },
                rotation: { horizon: 1, vertical: 1 },
                name:'d'
            }).addComponent(new GAPI.comps.Rotating())
        );

        GAPI.SceneMeneger.scene.addObject(
            new GAPI.GObjs.Cub({
                position: { x: 120, y: 120, z: 5 },
                rotation: { horizon: 1, vertical: 0 },
                name:'k'
            }).addComponent(new GAPI.comps.Rotating())
        );

        GAPI.SceneMeneger.scene.addObject(new GAPI.GObjs.Player({
            position: { x: 25, y: 25, z: 20 },
            rotation: { horizon: 1, vertical: 1 }
        }));
        console.log(GAPI.SceneMeneger.images.crown)
        
        GAPI.utils.MapCreator.addTestMap(
            {
                '1': GAPI.SceneMeneger.images.crown
            }
        );

        console.log(
            GAPI.SceneMeneger.scene.dynamicObj
        )

        this.GameLoop.start();
    }
}

const app = new App();
app.start();