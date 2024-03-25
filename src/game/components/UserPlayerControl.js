import Component from "./ex/Component.js";
import keyManager from '../utils/KeyManager.js'

export default class UserPlayerControl extends Component{
    constructor(e) {
        super(e);
        this.name = 'userPlayerControl';
        this.keyManager = new keyManager();

        this.this_speed = 3;
        this.step_speed = 3;
        this.run_speed = 6;
    }
    start(){
        if(!this.getUseComponent('physics')) throw new Error('useComponent (physics:Physics) = undefined');
    }
    upDate(){
        if(this.GObj.position.z > 0.3){
            this.getUseComponent('physics').isDown = false;
            this.GObj.position.z=0.3;
        }else{
            this.getUseComponent('physics').startDown()
        }
        
        // Изменяем координаты в зависимости от нажатой клавиши

        if (this.keyManager.isDown('KeyW')) {
            this.getUseComponent('physics').impulse.x =  Math.cos(this.GObj.rotationHorizon) *this.this_speed;
            this.getUseComponent('physics').impulse.y =  Math.sin(this.GObj.rotationHorizon) *this.this_speed;
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyS')) {
            this.getUseComponent('physics').impulse.x = -( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            this.getUseComponent('physics').impulse.y = -( Math.sin(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyA')) {
            this.getUseComponent('physics').impulse.x = ( Math.sin(this.GObj.rotationHorizon) *this.this_speed); 
            this.getUseComponent('physics').impulse.y = -( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *-this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyD')) {
            this.getUseComponent('physics').impulse.x = -( Math.sin(this.GObj.rotationHorizon) *this.this_speed); 
            this.getUseComponent('physics').impulse.y = ( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *this.this_speed);
        }

        if (this.keyManager.isDown('ArrowLeft')) {
            this.GObj.rotationHorizon -= 0.1;
        }
        else if (this.keyManager.isDown('ArrowRight')) {
            this.GObj.rotationHorizon += 0.1;
        }

        if (this.keyManager.isDown('ArrowUp')) {
            this.GObj.rotationVertical += 0.2;
        }
        else if (this.keyManager.isDown('ArrowDown')) {
            this.GObj.rotationVertical -= 0.2;
        }

        // if (this.keyManager.isDown('KeyE')) {
        //     // this.getUseComponent('physics').impulse.z -= 10;
        //     this.GObj.position.z = -10;
        // }
        // else if (this.keyManager.isDown('KeyQ')) {
        //     // this.getUseComponent('physics').impulse.z += 0.09;
        // }

        if (this.keyManager.isDown('Space')) {
            if(this.GObj.position.z >= 0.2){
                this.getUseComponent('physics').impulse.z = -10;
            }
        }

        if (this.keyManager.isDown('ShiftLeft') || this.keyManager.isDown('ShiftRight')) {
            this.this_speed = this.run_speed;
        }else{
            this.this_speed = this.step_speed;
        }

    }
}