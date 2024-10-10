import Component from "./ex/Component.js";

const GRAVITY_CONSTANT = 9.81 / 4;


export default class Physics extends Component {
    constructor(e) {
        super(e);
        this.name = 'physics'
        this.mass = e?.mass ?? 10;
        this.GRAVITY_DIRECTION = { x: 0, y: 0, z: - 1 }; // Направление гравитации
        this.impulse = { x: 0, y: 0, z: 0 }; // Импульс
        this.damping = 0.9; // Коэффициент затухания
        this.start_down_time = new Date().getTime();
        this.isDown = true;
    }

    // Обновление позиции объекта на каждом кадре
    upDate() {

        // Применяем импульс
        this.applyImpulse();

        if (this.isDown) {
            // Расчет силы гравитации
            const Vz = this.GRAVITY_DIRECTION.z * GRAVITY_CONSTANT * this.mass;

            // Расчет ускорения
            const Sz = (Vz + this.impulse.z) / this.mass;

            // Расчет скорости
            this.impulse.z += Sz * this.GObj.Time.deltaTime;

            // Расчет позиции
            // const down_time = ( new Date().getTime() - this.start_down_time ) / 1000
            // object.position.z += this.impulse.z * deltaTime //+ 0.5 * GRAVITY_CONSTANT * down_time**2;
        }
        const outxyz = { ...this.GObj.position }

        outxyz.x += this.impulse.x / this.mass * this.GObj.Time.deltaTime * 1000;
        outxyz.y += this.impulse.y / this.mass * this.GObj.Time.deltaTime * 1000;
        outxyz.z += this.impulse.z / this.mass * this.GObj.Time.deltaTime * 1000;

        // Уменьшаем импульс
        this.impulse.x *= this.damping;
        this.impulse.y *= this.damping;
        this.impulse.z *= this.damping;

        this.GObj.position = outxyz;
    }

    startDown() {
        this.isDown = true;
        this.start_down_time = new Date().getTime();
    }

    goto({ x, y, z }) {

    }

    // Метод для применения импульса к объекту
    applyImpulse() {
        // Уменьшаем импульс
        this.impulse.x *= this.damping;
        this.impulse.y *= this.damping;
        this.impulse.z *= this.damping;

        // Добавляем импульс к скорости объекта
        this.impulse.x += this.impulse.x / this.mass;
        this.impulse.y += this.impulse.y / this.mass;
        this.impulse.z += this.impulse.z / this.mass;
    }

}
