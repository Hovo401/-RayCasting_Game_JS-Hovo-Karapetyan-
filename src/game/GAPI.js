import MS from './scene/MS.js';
import Scene from './scene/Scene.js';
import GameLoop from './GameLoop.js';

// Game objects
import GameObject from './gameObjects/ex/GameObject.js';
import GameDynamicObject from './gameObjects/ex/GameDynamicObject.js';
import Player from './gameObjects/Player.js';
import Cub from './gameObjects/Cub.js';

// components
import Physics from './components/Physics.js';
import Rotating from './components/rotating.js';

// utils
import Time from './utils/Time.js';
import KeyManager from './utils/KeyManager.js';
import MapCreator from './utils/MapCreator.js';

export default class GAPI{
    static GameLoop = GameLoop;
    static Scene = Scene;
    static MS = MS;
    static GObjs = {
        'GObj': GameObject,
        'GDObj': GameDynamicObject,
        'Cub': Cub,
        'Player': Player,
    }
    static comps = {
        'Physics': Physics,
        'Rotating': Rotating,
    }
    static utils = {
        'Time': Time,
        'KeyManager': KeyManager,
        'MapCreator': MapCreator,
    }
}
