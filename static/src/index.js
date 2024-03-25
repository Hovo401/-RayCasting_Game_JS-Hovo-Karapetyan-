import GAPI from './game/GAPI.js';

class App {
  constructor() {
    this.GameLoop = new GAPI.GameLoop();
  }
  start() {
    new GAPI.utils.DownladMeneger().load([
      {key: 'crown', src: './img/texture/crown.jpg'},
      {key: 'start1_gray_fon', src: './img/texture/start1_gray_fon.png'},
      {key: 'tower_gray', src: './img/texture/tower_gray.png'},
      {key: 'wall1', src: './img/texture/wall1.png'},
      {key: 'wall2', src: './img/texture/wall2.png'},
      {key: 'Wall_1x1_3', src: './img/texture/Wall_1x1_3.png'},
      {key: 'Wall_1x1_4', src: './img/texture/Wall_1x1_4.png'},
      {key: 'Wall_1x1_5', src: './img/texture/person_j_1.png'},
    ]);

    // GAPI.SceneMeneger.scene.addObject(
    //     new GAPI.GObjs
    //         .Cub({
    //           position: {x: 70, y: 70, z: 5},
    //           rotation: {horizon: 0.0001, vertical: 1},
    //           name: 'd',
    //           texture: GAPI.SceneMeneger.images.crown,
    //         })
    //         .addComponent(new GAPI.comps.Rotating()));

    // GAPI.SceneMeneger.scene.addObject(
    //     new GAPI.GObjs
    //         .Cub({
    //           position: {x: 120, y: 120, z: 5},
    //           rotation: {horizon: 1, vertical: 0},
    //           name: 'k'
    //         })
    //         .addComponent(new GAPI.comps.Rotating()));

    GAPI.SceneMeneger.scene.addObject(
        new GAPI.GObjs.SharIsMash({
              position: {x: 100, y: 100, z: 5},
              rotation: {horizon: 0, vertical: 1},
              name: 'k',
              texture: GAPI.SceneMeneger.images.Wall_1x1_5,
            }).addComponent(new GAPI.comps.Rotating()))


            // .addComponent(new GAPI.comps.Rotating()));

    GAPI.SceneMeneger.scene.addObject(new GAPI.GObjs.Player({
      position: {x: 25, y: 25, z: 20},
      rotation: {horizon: 1, vertical: 1}
    }));
    console.log(GAPI.SceneMeneger.images.crown)

    GAPI.utils.MapCreator.addTestMap(
        {
          '1': GAPI.SceneMeneger.images.Wall_1x1_5,
          '2': GAPI.SceneMeneger.images.wall2,
          '3': GAPI.SceneMeneger.images.Wall_1x1_3,
          '4': GAPI.SceneMeneger.images.Wall_1x1_4,
          '5': GAPI.SceneMeneger.images.Wall_1x1_5,
          '6': GAPI.SceneMeneger.images.crown,
          '7': GAPI.SceneMeneger.images.start1_gray_fon,
        },

    );
    console.log(GAPI.SceneMeneger.images)
    console.log(GAPI.SceneMeneger.scene.dynamicObj)

            this.GameLoop.start();
  }
}

const app = new App();
app.start();
