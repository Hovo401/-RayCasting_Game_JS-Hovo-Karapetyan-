const GRAVITY_CONSTANT = 9.81/15;

export default class Physics {
    constructor() {
        this.GRAVITY_DIRECTION = { x: 0, y: 0, z: +1 }; // Направление гравитации
        this.impulse = { x: 0, y: 0, z: 0 }; // Импульс
        this.damping = 0.9; // Коэффициент затухания
        this.start_down_time = new Date().getTime();
        this.isDown = true;
        this.mass = 10
    }

    // Обновление позиции объекта на каждом кадре
    updatePosition(object, deltaTime) {

        // Применяем импульс
        this.applyImpulse(object);
        
        if(this.isDown){
            // Расчет силы гравитации
            const Vz= this.GRAVITY_DIRECTION.z * GRAVITY_CONSTANT * object.mass;
            
            // Расчет ускорения
            const Sz= (Vz + this.impulse.z) / object.mass;
            
            // Расчет скорости
            this.impulse.z += Sz * deltaTime;

            // Расчет позиции
            // const down_time = ( new Date().getTime() - this.start_down_time ) / 1000
            // object.position.z += this.impulse.z * deltaTime //+ 0.5 * GRAVITY_CONSTANT * down_time**2;
        }
        const outxyz = {x:object.position.x, y:object.position.y, z:object.position.z}
        outxyz.x += this.impulse.x/ object.mass * deltaTime;
        outxyz.y += this.impulse.y/ object.mass * deltaTime;
        outxyz.z += this.impulse.z/ object.mass * deltaTime;

        // Уменьшаем импульс
        this.impulse.x *= this.damping;
        this.impulse.y *= this.damping;
        this.impulse.z *= this.damping;
        return outxyz;
    }    

    startDown(){
        this.isDown = true;
        this.start_down_time = new Date().getTime();
    }

    goto({x,y,z}){

    }

    // Метод для применения импульса к объекту
    applyImpulse(object) {
        // Уменьшаем импульс
        this.impulse.x *= this.damping;
        this.impulse.y *= this.damping;
        this.impulse.z *= this.damping;

        // Добавляем импульс к скорости объекта
        this.impulse.x += this.impulse.x / object.mass;
        this.impulse.y += this.impulse.y / object.mass;
        this.impulse.z += this.impulse.z / object.mass;
    }
}
