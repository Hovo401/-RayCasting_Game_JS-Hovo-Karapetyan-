export default class KeyManager { // singelton
    constructor() {
        if(KeyManager.ex){
            return KeyManager.ex;
        }
        KeyManager.ex = this;
        this.keys = {}; // Объект для хранения состояния клавиш
        this.setupListeners();
    }

    // Метод для установки обработчиков событий нажатия и отпускания клавиш
    setupListeners() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    // Метод для обработки события нажатия клавиши
    handleKeyDown(event) {
        const key = event.code.toLowerCase(); // Получаем код нажатой клавиши и приводим к нижнему регистру
        this.keys[key] = true; // Устанавливаем состояние клавиши в true
    }

    // Метод для обработки события отпускания клавиши
    handleKeyUp(event) {
        const key = event.code.toLowerCase(); // Получаем код нажатой клавиши и приводим к нижнему регистру
        this.keys[key] = false; // Устанавливаем состояние клавиши в false
    }

    // Метод для проверки, нажата ли клавиша
    isDown(key) {
        return this.keys[key.toLowerCase()] || false;
    }
}
