export default class CanvasEl{
    constructor(){
        this.canvas = document.getElementById('mainGame');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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
}