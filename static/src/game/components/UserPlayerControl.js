import Component from "./ex/Component.js";
import keyManager from '../utils/KeyManager.js'

export default class UserPlayerControl extends Component{
    constructor(e) {
        super(e);
        this.name = 'userPlayerControl';
        this.keyManager = new keyManager();

        this.this_speed = 3;
        this.step_speed = 3;
        this.run_speed = 10;
    }
    start(){
        if(!this.getUseComponent('physics')) throw new Error('useComponent (physics:Physics) = undefined');
    }
    upDate(){
        if(this.GObj.position.z > 0){
            this.getUseComponent('physics').isDown = false;
            this.GObj.position.z = 0;
        }else{
            this.getUseComponent('physics').startDown()
        }
        
        // Изменяем координаты в зависимости от нажатой клавиши
        var vector2 = {x:0,y:0}
        if (this.keyManager.isDown('KeyW')) {
            vector2.x +=  Math.cos(this.GObj.rotationHorizon) *this.this_speed;
            vector2.y +=  Math.sin(this.GObj.rotationHorizon) *this.this_speed;
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *this.this_speed);
        } 
        if (this.keyManager.isDown('KeyS')) {
            vector2.x += -( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            vector2.y += -( Math.sin(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.cos(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.sin(this.GObj.rotationHorizon) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyA')) {
            vector2.x += ( Math.sin(this.GObj.rotationHorizon) *this.this_speed); 
            vector2.y += -( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *-this.this_speed);
        } 
        if (this.keyManager.isDown('KeyD')) {
            vector2.x += -( Math.sin(this.GObj.rotationHorizon) *this.this_speed); 
            vector2.y += ( Math.cos(this.GObj.rotationHorizon) *this.this_speed);
            // this.GObj.run(this.GObj.positionX + Math.sin(this.GObj.rotationHorizon) *-this.this_speed, this.GObj.positionY + Math.cos(this.GObj.rotationHorizon) *this.this_speed);
        }
        this.getUseComponent('physics').impulse.x = vector2.x ;
        this.getUseComponent('physics').impulse.y = vector2.y;
        

        if (this.keyManager.isDown('ArrowLeft')) {
            this.GObj.rotationHorizon -= 3 * this.GObj.Time.deltaTime ;
        }
        else if (this.keyManager.isDown('ArrowRight')) {
            this.GObj.rotationHorizon += 3 * this.GObj.Time.deltaTime ;
        }

        if (this.keyManager.isDown('ArrowUp')) {
            var newRotationVertical = this.GObj.rotationVertical + 4 * this.GObj.Time.deltaTime
            if( 0 < newRotationVertical && newRotationVertical < 2 ){
                this.GObj.rotationVertical = newRotationVertical;
            }
        }
        else if (this.keyManager.isDown('ArrowDown')) {
            var newRotationVertical = this.GObj.rotationVertical - 4 * this.GObj.Time.deltaTime
            if( 0 < newRotationVertical && newRotationVertical < 2 ){
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
            if(this.GObj.position.z >= -0.2){
                this.getUseComponent('physics').impulse.z = -1;
            }
        }

        if (this.keyManager.isDown('ShiftLeft') || this.keyManager.isDown('ShiftRight')) {
            this.this_speed = this.run_speed;
        }else{
            this.this_speed = this.step_speed;
        }

    }
}
