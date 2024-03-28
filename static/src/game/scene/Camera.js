export default class Camera {
    constructor({position, rotation}) {
      this.position = position;
      this.rotation = rotation;
  
      this.FOV = Math.PI / 2;
      this.HALF_FOV = this.FOV / 2;
      this.NUM_RAYS = 100;
      this.MAX_DEPT = 2000;
      this.DELTA_ANGLE = this.FOV / this.NUM_RAYS;
      this.d = 900 / (2 * Math.tan(this.HALF_FOV / 2));
    }
  }
  