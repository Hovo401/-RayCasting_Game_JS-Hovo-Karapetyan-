import Cub from '../gameObjects/Cub.js';
import SceneMeneger from '../scene/SceneMeneger.js';
import Component from '../components/ex/Component.js';
import GAPI from '../GAPI.js';

export default class MapCreator {
  static addMatrixSpamMap(matrix, textureList) {
    matrix.forEach((e0, i0) => {
      for (let i1 = 0; i1 < e0.length; i1++) {
        const e1 = e0[i1];
        if (e1 == ' ') continue;
        const delta = Math.random() * .8;
        SceneMeneger.scene.addObject(new Cub({
          position: { x: i1 * 2, y: i0 * 2, z: (2 + delta) },
          mashHeight: (2 + delta),
          name: '' + Math.random(),
          texture: textureList[e1]
        }).addComponent(new GAPI.comps.Rotating({
          speedDeg: 40,
        })))
      }
    })
  }
  static addTestMap(textureList) {
    MapCreator.addMatrixSpamMap(testMap, textureList);
  }
}



const testMap = [
  '   1111111      6',
  '   6    ',
  '1              4      7',
  '1          ',
  '1          ',
  '1          ',
  '1          ',
  '          ',
  '1          ',
  '1          ',
  '1          ',
  '1          ',
  '1               5 ',
  '1          ',
  '1             3 ',
  '1          ',
  '1          ',
  '12222       22222',
]
