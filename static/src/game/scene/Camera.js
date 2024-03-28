export default class Camera {
    constructor({position, rotation}) {
      this.position = position;
      this.rotation = rotation;
  
      this._FOV = Math.PI / 2;
      this.HALF_FOV = this.FOV / 2;
      this._NUM_RAYS = 300;
      this.MAX_DEPT = 2000;
      this.DELTA_ANGLE = this.FOV / this.NUM_RAYS;
      this.d = 700 / (2 * Math.tan(this.HALF_FOV / 2));
      
      this._FOVDeg = 90;
      this.MAX_PAINT = Infinity;

      this.anti_fisheye_effect = true;
    }
    set FOV(value){
      this._FOV = value;
      this.HALF_FOV = this.FOV / 2;
      this.DELTA_ANGLE = this.FOV / this.NUM_RAYS;
      this.d = (value < Math.PI * 1.5)
      ? 700 / (2 * Math.tan(this.HALF_FOV / 2)) 
      : 700 / (2 * Math.tan(Math.PI * 1.5/ 4))
       ;
      console.log(value)
      // this.d = 900 / (2 * Math.tan(.5));
    }
    get FOV(){
      return this._FOV;
    }
    set FOVDeg(value){
      this.FOV = value / 180 * Math.PI
      this._FOVDeg = value
    }
    get FOVDeg(){
      return this._FOVDeg;
    }
    get NUM_RAYS(){
      return this._NUM_RAYS;
    }
    set NUM_RAYS(value){
      this._NUM_RAYS = value;
      this.DELTA_ANGLE = this.FOV / this._NUM_RAYS;
    }
  }
  