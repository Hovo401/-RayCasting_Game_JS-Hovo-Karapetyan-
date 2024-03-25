export default class Time {
    static frameTimes = [16];
    static deltaTime = 16 / 1000; // px/s
    static framesLengthLimit = 60;
    static lastDate = Date.now();

    static update() {
        var newDate = Date.now();
        var frameTime = newDate - this.lastDate;

        this.lastDate = newDate; // Обновление времени последнего кадра
        this.frameTimes.push(frameTime); // Добавление нового значения
        this.deltaTime = frameTime / 1000;

        if (this.frameTimes.length > this.framesLengthLimit) {
            this.frameTimes.shift();
        }
    }

    static getFrame() {
        return this.frameTimes[this.frameTimes.length - 1];
    }

    static getFPS() {
        return Math.round(this.getAverageFPS());
    }

    static getAverageFPS() {
        const sum = this.frameTimes.reduce((a, b) => a + b, 0);
        return 1000 / (sum / this.frameTimes.length);
    }

    static getMaxFPS() {
        return 1000 / Math.min(...Time.frameTimes);
    }

    static getMinFPS() {
        return 1000 / Math.max(...Time.frameTimes);
    }
}
