import MS from "../scene/MS.js";
import Cub from "../gameObjects/Cub.js";

export default class MapCreator{
    static addMatrixSpamMap(matrix){

        matrix.forEach((e0, i0)=>{
            for(let i1 = 0; i1 < e0.length; i1++){
                const e1 = e0[i1];
                switch(e1){
                    case '1':
                        MS.scene.addObject(
                            new Cub({
                                position: {x: i1 * 20, y: i0 * 20, z: 10},
                                name: '' + Math.random()
                            })
                        )
                }
            }
        })

    }
    static addTestMap(){
        MapCreator.addMatrixSpamMap(testMap);
    }
}



const testMap = [
    '111111111111',
    '1           ',
    '1   4   u   ',
    '1        2  ',
    '1           ',
    '1           ',
    '1    3      ',
    '1           ',
    '1          1',
]