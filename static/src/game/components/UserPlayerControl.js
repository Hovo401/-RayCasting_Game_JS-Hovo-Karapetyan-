import Component from "./ex/Component.js";
import keyManager from '../utils/KeyManager.js'

export default class UserPlayerControl extends Component {
    constructor(e) {
        super(e);
        this.name = 'userPlayerControl';
        this.keyManager = new keyManager();

        this.this_speed = 1;
        this.step_speed = 3;
        this.run_speed = 10;

        this.CameraSpeed = 0.5;
        this.pol = 0;
    }
    start() {
        if (!this.getUseComponent('physics')) throw new Error('useComponent (physics:Physics) = undefined');


        // Функция для включения Pointer Lock
        function requestPointerLock() {
            document.body.requestPointerLock = document.body.requestPointerLock ||
                document.body.mozRequestPointerLock ||
                document.body.webkitRequestPointerLock;
            document.body.requestPointerLock();
        }
        let mauseIsActive = false;
        // Обработчик для события Pointer Lock
        document.addEventListener('pointerlockchange', () => {
            if (document.pointerLockElement === document.body ||
                document.mozPointerLockElement === document.body ||
                document.webkitPointerLockElement === document.body) {
                console.log('Pointer Lock активен');
                mauseIsActive = true;
                document.addEventListener('mousemove', onMouseMove, false);
            } else {
                console.log('Pointer Lock отключен');
                mauseIsActive = false;
                document.removeEventListener('mousemove', onMouseMove, false);
            }
        }, false);

        // Запрашиваем Pointer Lock при клике

        document.getElementById('mainGame').addEventListener('click', () => {
            requestPointerLock();
        }, false);

        // Обработчик движения мыши
        document.addEventListener('mousemove', (event) => {
            if (!mauseIsActive) return;
            // Получаем смещение мыши
            let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

            // Обновляем горизонтальное вращение
            this.GObj.rotationHorizon += movementX * 0.005 * this.CameraSpeed; // Уменьшили чувствительность

            // Обновляем вертикальное вращение с учетом ограничений
            let newRotationVertical = this.GObj.rotationVertical - movementY * 0.008 * this.CameraSpeed; // Уменьшили чувствительность
            if (0 < newRotationVertical && newRotationVertical < 2) {
                this.GObj.rotationVertical = newRotationVertical;
            }
        });

    }

    upDate() {
        if (this.GObj.position.z <= this.pol + 1.8) {
            this.getUseComponent('physics').isDown = false;
            this.GObj.position.z = this.pol + 1.8;
        } else {
            this.getUseComponent('physics').startDown()
        }

        // Изменяем координаты в зависимости от нажатой клавиши
        var vector2 = { x: 0, y: 0 }
        if (this.keyManager.isDown('KeyW')) {
            vector2.x += Math.cos(this.GObj.rotationHorizon) * this.this_speed;
            vector2.y += Math.sin(this.GObj.rotationHorizon) * this.this_speed;
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *this.this_speed);
        }
        if (this.keyManager.isDown('KeyQ')) {
            this.pol -= 1;
        }
        if (this.keyManager.isDown('KeyE')) {
            this.pol += 1;
        }
        if (this.keyManager.isDown('KeyS')) {
            vector2.x += -(Math.cos(this.GObj.rotationHorizon) * this.this_speed);
            vector2.y += -(Math.sin(this.GObj.rotationHorizon) * this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyA')) {
            vector2.x += (Math.sin(this.GObj.rotationHorizon) * this.this_speed);
            vector2.y += -(Math.cos(this.GObj.rotationHorizon) * this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyD')) {
            vector2.x += -(Math.sin(this.GObj.rotationHorizon) * this.this_speed);
            vector2.y += (Math.cos(this.GObj.rotationHorizon) * this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *this.this_speed);
        }
        this.getUseComponent('physics').impulse.x = vector2.x;
        this.getUseComponent('physics').impulse.y = vector2.y;


        if (this.keyManager.isDown('ArrowLeft')) {
            this.GObj.rotationHorizon -= 3 * this.GObj.Time.deltaTime;
        }
        else if (this.keyManager.isDown('ArrowRight')) {
            this.GObj.rotationHorizon += 3 * this.GObj.Time.deltaTime;
        }

        if (this.keyManager.isDown('ArrowUp')) {
            var newRotationVertical = this.GObj.rotationVertical + 4 * this.GObj.Time.deltaTime
            if (0 < newRotationVertical && newRotationVertical < 2) {
                this.GObj.rotationVertical = newRotationVertical;
            }
        }
        else if (this.keyManager.isDown('ArrowDown')) {
            var newRotationVertical = this.GObj.rotationVertical - 4 * this.GObj.Time.deltaTime
            if (0 < newRotationVertical && newRotationVertical < 2) {
                this.GObj.rotationVertical = newRotationVertical;
            }
        }



        if (this.keyManager.isDown('KeyE')) {
            // this.getUseComponent('physics').impulse.z -= 10;
            // this.GObj.position.z += -0.1;
        }
        else if (this.keyManager.isDown('KeyQ')) {
            // this.getUseComponent('physics').impulse.z += 0.09;
        }

        if (this.keyManager.isDown('Space')) {
            if (this.GObj.position.z >= 0) {
                this.getUseComponent('physics').impulse.z = 1;
            }
        }

        if (this.keyManager.isDown('ShiftLeft') || this.keyManager.isDown('ShiftRight')) {
            this.this_speed = this.run_speed;
        } else {
            this.this_speed = this.step_speed;
        }

    }
}
