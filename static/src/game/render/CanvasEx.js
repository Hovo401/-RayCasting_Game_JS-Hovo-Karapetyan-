export default class CanvasEl{
    constructor(){
        this.canvas = document.getElementById('mainGame');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.ctx.imageSmoothingEnabled = false; // Отключаем сглаживание
        this.ctx.webkitImageSmoothingEnabled = false; // Для Safari
        this.ctx.msImageSmoothingEnabled = false; // Для IE
    }
    line(x, y, xn, yn, color = 'rgb(50,120,50)', width = 3){
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(xn, yn);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.stroke();
    }
    

    shrjan(x,y,radius){
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#ff0000';
        this.ctx.stroke();
    }

    drawImage(texture, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight){
        this.ctx.drawImage(texture, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight);
    }

    fillRect(x, y, width, height, color = [50 / 255, 120 / 255, 50 / 255, 1]){
        this.ctx.fillStyle = `rgba(${color.join(',')})`; // Преобразуем цвет в строку RGBA
        this.ctx.fillRect(x, y, width, height);
    }   
}