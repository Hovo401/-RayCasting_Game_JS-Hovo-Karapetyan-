// import {mapArr, staticObj, mash} from '../scene/main.map.js';
import KeyboardManager from '../components/KeyboardManager.js'
import Physics from '../components/Physics.js';

export default class Player{
    constructor({x, y, angle}){
        this.mass = 80;
        this.position = { x: x, y: y, z: 0.3 };
        this.velocity = { x: 0, y: 0, z: 0 };
        this.yWidth = 5;
        this.xWidth = 5;
        this.angle = angle;
        this.vertAngle = 1;
        this.keyManager = new KeyboardManager();
        this.this_speed = 3;
        this.step_speed = this.mass*6;
        this.run_speed = this.mass*10;

        this.physics = new Physics();
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
            this.position.x = x;
            this.position.y = y;
        }
        else if( !this.isColisia(x, y)){
            this.position.x = x;
            this.position.y = y;
        }
        else if(!this.isColisia(this.position.x, y)){
            this.position.y = y;
        }
        else if(!this.isColisia(x, this.position.y)){
            this.position.x = x;
        }
        if(z <= 0.3){
            this.position.z = z;
        }else{
            this.physics.impulse.z = 0;
        }
    }


    play(){

        if(this.position.z > 0.3){
            this.physics.isDown = false;
            this.position.z=0.3;
        }else{
            this.physics.startDown()
        }
        this.run(this.physics.updatePosition(this, 1));
        
        // Изменяем координаты в зависимости от нажатой клавиши

        if (this.keyManager.isDown('KeyW')) {
            this.physics.impulse.x = this.position.x - this.position.x + Math.cos(this.angle) *this.this_speed;
            this.physics.impulse.y = this.position.y - this.position.y + Math.sin(this.angle) *this.this_speed;
            // this.run(this.position.x + Math.cos(this.angle) *this.this_speed, this.position.y + Math.sin(this.angle) *this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyS')) {
            this.physics.impulse.x = -(this.position.x - this.position.x + Math.cos(this.angle) *this.this_speed);
            this.physics.impulse.y = -(this.position.y - this.position.y + Math.sin(this.angle) *this.this_speed);
            // this.run(this.position.x + Math.cos(this.angle) *-this.this_speed, this.position.y + Math.sin(this.angle) *-this.this_speed);
        }
        if (this.keyManager.isDown('KeyA')) {
            this.physics.impulse.x = (this.position.y - this.position.y + Math.sin(this.angle) *this.this_speed); 
            this.physics.impulse.y = -(this.position.x - this.position.x + Math.cos(this.angle) *this.this_speed);
            // this.run(this.position.x + Math.sin(this.angle) *this.this_speed, this.position.y + Math.cos(this.angle) *-this.this_speed);
        } 
        else if (this.keyManager.isDown('KeyD')) {
            this.physics.impulse.x = -(this.position.y - this.position.y + Math.sin(this.angle) *this.this_speed); 
            this.physics.impulse.y = (this.position.x - this.position.x + Math.cos(this.angle) *this.this_speed);
            // this.run(this.position.x + Math.sin(this.angle) *-this.this_speed, this.position.y + Math.cos(this.angle) *this.this_speed);
        }

        if (this.keyManager.isDown('ArrowLeft')) {
            this.angle -= 0.1;
        }
        else if (this.keyManager.isDown('ArrowRight')) {
            this.angle += 0.1;
        }

        if (this.keyManager.isDown('ArrowUp')) {
            this.vertAngle += 0.2;
        }
        else if (this.keyManager.isDown('ArrowDown')) {
            this.vertAngle -= 0.2;
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

        if (this.keyManager.isDown('ShiftLeft') || this.keyManager.isDown('ShiftRight')) {
            this.this_speed = this.run_speed;
        }else{
            this.this_speed = this.step_speed;
        }

    }

}
