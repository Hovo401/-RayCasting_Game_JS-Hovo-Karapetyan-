import SceneMeneger from '../game/scene/SceneMeneger.js'
import GAPI from '../game/GAPI.js';

const socket = io();

export default class OnlineSocketController {
    constructor() {
        if (OnlineSocketController.ex) {
            return OnlineSocketController.ex;
        }
        OnlineSocketController.ex = this;

        this.player = SceneMeneger.scene.getDynamicObjByName('player')
        this.mySesionId = '';

        this.OnlinePlayers = {};

        socket.on('connect', () => {
            this.mySesionId = socket.id;
            console.log('Мой идентификатор сессии:', this.mySesionId);

            socket.on('clientData', (reqGameOnlineData) => {
                var g = JSON.parse(reqGameOnlineData);
                delete g[this.mySesionId];
                this.OnlinePlayers = g;
                // console.log(g)

                for (let key in this.OnlinePlayers) {
                    const GObj = SceneMeneger.scene.getDynamicObjByName(key);
                    if (GObj) {
                        GObj.position = this.OnlinePlayers[key].data.position;
                        GObj.rotation = this.OnlinePlayers[key].data.rotation;
                        GObj.rotationHorizon += Math.PI;
                        GObj.onlineGame = true;
                    } else {
                        GAPI.SceneMeneger.scene.addObject(
                            new GAPI.GObjs.SharIsMash({
                                position: { x: 150, y: 100, z: 0 },
                                rotation: { horizon: 0, vertical: 1 },
                                MashQuantity: 30,
                                radius: 4,
                                name: key,
                                texturingMetod: 'full',
                                texture: GAPI.SceneMeneger.images.Wall_1x1_5,
                            }));
                    }
                }
            })

            socket.on('userDisconect', (iderId) => {

                GAPI.SceneMeneger.scene.delDynamicObjectByName(iderId);
                console.log('userd disqonect', iderId)
            })
        });


    }
    reqGameUserDate() {
        socket.emit('reqGameUserDate',
            JSON.stringify({
                position: this.player.position,
                rotation: this.player.rotation
            })
        );


    }
}
