import Time from './utils/Time.js';
import MS from './scene/MS.js';
import Scene from './scene/Scene.js';
import Game from './Game.js';

import GameObject from './gameObjects/ex/GameObject.js';
import GameDynamicObject from './gameObjects/ex/GameDynamicObject.js';
import Player from './gameObjects/Player.js';
import Cub from './gameObjects/Cub.js';

export default class GAPI{
    static Game = Game;
    static Time = Time;
    static Scene = Scene;
    static MS = MS;
    static GObjs = {
        'GameObject': GameObject,
        'GameDynamicObject': GameDynamicObject,
        'Cub': Cub,
        'Player': Player,
    }
}
