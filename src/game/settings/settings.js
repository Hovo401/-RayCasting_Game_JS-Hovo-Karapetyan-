class Settings {
    constructor() {
      this.FOV = Math.PI / 2;
      this.HALF_FOV = this.FOV / 2;
      this.NUM_RAYS = 150;
      this.MAX_DEPT = 500;
      this.DELTA_ANGLE = this.FOV / this.NUM_RAYS;
      this.d = this.NUM_RAYS / (2 * Math.tan(this.HALF_FOV / 2));
    }
}
  
const settings = {ray_casting: new Settings()};
  
export default settings;