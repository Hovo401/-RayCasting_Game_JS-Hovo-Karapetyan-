import Cub from './Cub.js';
import keyManager from '../utils/KeyManager.js'
import Physics from '../components/Physics.js';
import MS from '../scene/MS.js';

export default class Player extends Cub{
    constructor(e){
        e.position = {x:25,y:25,z:20}
        super(e);
        
        this.keyManager = new keyManager();
        this.this_speed = 3;
        this.step_speed = this.mass*6;
        this.run_speed = this.mass*10;
        this.isRendring = false;
        MS.scene.camera.position = this.position;
        MS.scene.camera.rotation = this.rotation;
        this.physics = new Physics({
            GObj: this,
            mass: 10,
        })

        this.addComponent(this.physics);
    }

    isColisia(x, y){
        let cal = false;
        // for(let obj of staticObj){
            
        //     if(obj.xy[0] < x + this.xWidth && x - this.xWidth < obj.xy[0] + obj.xy[2] &&
        //         obj.xy[1] < y + this.yWidth && y - this.yWidth < obj.xy[1] + obj.xy[3] ){
        //             cal = true;
        //     }
        // }
        return cal;
    }



    run({x,y,z}){
        if(this.position.z > 1.5 || this.position.z < -0.5){
            this.positionX = x;
            this.positionY = y;
        }
        else if( !this.isColisia(x, y)){
            this.positionX = x;
            this.positionY = y;
        }
        else if(!this.isColisia(this.positionX, y)){
            this.positionY = y;
        }
        else if(!this.isColisia(x, this.positionY)){
            this.positionX = x;
        }
        if(z <= 0.3){
            this.position.z = z;
        }else{
            this.physics.impulse.z = 0;
        }
    }


    upDate_=()=>{
        // console.log(this.components)
        if(this.position.z > 0.3){
            this.physics.isDown = false;
            this.position.z=0.3;
        }else{
            this.physics.startDown()
        }
        
        // Изменяем координаты в зависимости от нажатой клавиши

        if (this.keyManager.isDown('KeyW')) {
            this.physics.impulse.x =  Math.cos(this.rotationHorizon) *this.this_speed;
            this.physics.impulse.y =  Math.sin(this.rotationHorizon) *this.this_speed;
            // this.run(this.positionX + Math.cos(this.rotationHorizon) *this.this_speed, this.positionY + Math.sin(this.rotationHorizon) *this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyS')) {
            this.physics.impulse.x = -( Math.cos(this.rotationHorizon) *this.this_speed);
            this.physics.impulse.y = -( Math.sin(this.rotationHorizon) *this.this_speed);
            // this.run(this.positionX + Math.cos(this.rotationHorizon) *-this.this_speed, this.positionY + Math.sin(this.rotationHorizon) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyA')) {
            this.physics.impulse.x = ( Math.sin(this.rotationHorizon) *this.this_speed); 
            this.physics.impulse.y = -( Math.cos(this.rotationHorizon) *this.this_speed);
            // this.run(this.positionX + Math.sin(this.rotationHorizon) *this.this_speed, this.positionY + Math.cos(this.rotationHorizon) *-this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyD')) {
            this.physics.impulse.x = -( Math.sin(this.rotationHorizon) *this.this_speed); 
            this.physics.impulse.y = ( Math.cos(this.rotationHorizon) *this.this_speed);
            // this.run(this.positionX + Math.sin(this.rotationHorizon) *-this.this_speed, this.positionY + Math.cos(this.rotationHorizon) *this.this_speed);
        }

        if (this.keyManager.isDown('ArrowLeft')) {
            this.rotationHorizon -= 0.1;
        }
        else if (this.keyManager.isDown('ArrowRight')) {
            this.rotationHorizon += 0.1;
        }

        if (this.keyManager.isDown('ArrowUp')) {
            this.rotationVertical += 0.2;
        }
        else if (this.keyManager.isDown('ArrowDown')) {
            this.rotationVertical -= 0.2;
        }

        // if (this.keyManager.isDown('KeyE')) {
        //     // this.physics.impulse.z -= 10;
        //     this.position.z = -10;
        // }
        // else if (this.keyManager.isDown('KeyQ')) {
        //     // this.physics.impulse.z += 0.09;
        // }

        if (this.keyManager.isDown('Space')) {
            if(this.position.z >= 0.2){
                this.physics.impulse.z = -10;
            }
        }

        // if (this.keyManager.isDown('ShiftLeft') || this.keyManager.isDown('ShiftRight')) {
        //     this.this_speed = this.run_speed;
        // }else{
        //     this.this_speed = this.step_speed;
        // }

    }

}
