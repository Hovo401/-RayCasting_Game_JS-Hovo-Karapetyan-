import GAPI from './game/GAPI.js';

// import * as dat_gui from './lib/dat.gui.js';

class App {
  constructor() {
    this.GameLoop = new GAPI.GameLoop();

    const gui = new dat.GUI();
    const camera = gui.addFolder('Camera');
    camera.add(GAPI.SceneMeneger.scene.camera, 'FOVDeg').min(20).max(360).name('Field of View (FOV)');
    camera.add(GAPI.SceneMeneger.scene.camera, 'anti_fisheye_effect').name('Anti Fisheye Effect');
    camera.add(GAPI.SceneMeneger.scene.camera, 'NUM_RAYS').min(10).max(window.innerWidth);
  }
  start() {

    new GAPI.utils.DownladMeneger().load([
      { key: 'crown', src: './img/texture/crown.jpg' },
      { key: 'start1_gray_fon', src: './img/texture/start1_gray_fon.png' },
      { key: 'tower_gray', src: './img/texture/tower_gray.png' },
      { key: 'wall1', src: './img/texture/wall1.png' },
      { key: 'wall2', src: './img/texture/wall2.png' },
      { key: 'Wall_1x1_3', src: './img/texture/Wall_1x1_3.png' },
      { key: 'Wall_1x1_4', src: './img/texture/Wall_1x1_4.png' },
      { key: 'Wall_1x1_5', src: './img/texture/person_j_1.png' },
    ]);


    GAPI.SceneMeneger.scene.addObject(
      new GAPI.GObjs.SharIsMash({
        position: { x: 150, y: 100, z: 0 },
        rotation: { horizon: 0, vertical: 1 },
        MashQuantity: 80,
        radius: 10,
        name:'a1',
        texturingMetod:'segment',
        texture: GAPI.SceneMeneger.images.Wall_1x1_5,
      }).addComponent(new GAPI.comps.Rotating({
        speedDeg: -4,
      })))

      GAPI.SceneMeneger.scene.addObject(
        new GAPI.GObjs.SharIsMash({
          position: { x: 90, y: 90, z: -0.5 },
          rotation: { horizon: 0, vertical: 1 },
          MashQuantity: 80,
          radius: 10,
          name:'a8',
          texturingMetod:'full',
          texture: GAPI.SceneMeneger.images.crown,
        }))

        GAPI.SceneMeneger.scene.addObject(
          new GAPI.GObjs.SharIsMash({
            position: { x: 90, y: 90, z: 0 },
            rotation: { horizon: 0, vertical: 1 },
            MashQuantity: 80,
            radius: 10,
            name:'a9',
            texturingMetod:'full',
            texture: GAPI.SceneMeneger.images.crown,
          }))


    GAPI.SceneMeneger.scene.addObject(
      new GAPI.GObjs.SharIsMash({
        position: { x: 100, y: 100, z: 0 },
        rotation: { horizon: 0, vertical: 1 },
        MashQuantity: 30,
        radius: 5,
        name:'a2',
        texture: GAPI.SceneMeneger.images.crown,
        texturingMetod:'full',
      }).addComponent(new GAPI.comps.Rotating({
        speedDeg: 40,
      })))


    // .addComponent(new GAPI.comps.Rotating()));

    GAPI.SceneMeneger.scene.addObject(new GAPI.GObjs.Player({
      position: { x: 25, y: 25, z: 0 },
      rotation: { horizon: 1, vertical: 1 }
    }));
    console.log(GAPI.SceneMeneger.images.crown)

    GAPI.utils.MapCreator.addTestMap(
      {
        '1': GAPI.SceneMeneger.images.wall1,
        '2': GAPI.SceneMeneger.images.wall2,
        '3': GAPI.SceneMeneger.images.Wall_1x1_3,
        '4': GAPI.SceneMeneger.images.Wall_1x1_4,
        '5': GAPI.SceneMeneger.images.crown,
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
