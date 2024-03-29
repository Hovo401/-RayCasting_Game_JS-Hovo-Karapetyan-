import Cub from '../gameObjects/Cub.js';
import SceneMeneger from '../scene/SceneMeneger.js';

export default class MapCreator {
  static addMatrixSpamMap(matrix, textureList) {
    matrix.forEach((e0, i0) => {
      for (let i1 = 0; i1 < e0.length; i1++) {
        const e1 = e0[i1];
        if (e1 == ' ') continue;
        SceneMeneger.scene.addObject(new Cub({
          position: {x: i1 * 20, y: i0 * 20, z: 0},
          name: '' + Math.random(),
          texture: textureList[e1]
        }))
      }
    })
  }
  static addTestMap(textureList) {
    MapCreator.addMatrixSpamMap(testMap, textureList);
  }
}



const testMap = [
  '1111111111      6',
  '1          ',
  '1        4      7',
  '1          ',
  '1               5 ',
  '1          ',
  '1          3 ',
  '1          ',
  '1          ',
  '12222222222',
]
