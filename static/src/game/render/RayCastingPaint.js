import SceneMeneger from '../scene/SceneMeneger.js';

import RayCatsting from './RayCatsting.js';

export default class RayCastingPaint extends RayCatsting {
  constructor(e) {
    super(e);
  }
  PaintUpDate() {
    var y_start = this.canvas.height / 2 * this.c.rotation.vertical;

    this.ctx.fillStyle = '#4990BB';
    this.ctx.fillRect(0, 0, this.canvas.width, y_start);
    this.ctx.fillStyle = '#7F6548';
    this.ctx.fillRect(0, y_start, this.canvas.width, this.canvas.width);

    const delta = this.canvas.width / this.c.NUM_RAYS;
    for (let i = 0; i < this.rayMatrix.length; ++i) {
      var maxgim = 1;
      var j = 0;
      for (let j = this.rayMatrix[i].length - 1; j >= 0; j--) {
      // for(let j =  0; j < this.rayMatrix[i].length; j++){
      var ray = this.rayMatrix[i][j]
      // !GObj.mash?.texturingMetod !== 'segment'
      const color = [(Math.log10(ray.distance) * 100)];

      this.ctx.fillStyle = `rgb( ${color[0]}, ${color[0]}, ${color[0]} )`;


      var proekcia = ray.distance;
      proekcia *= Math.cos(this.c.rotation.horizon - ray.rayDeltaAngle);
      proekcia =
        (this.c.d / proekcia * 10 *
          (this.canvas.width / this.canvas.height) * this.canvas.height /
          this.canvas.width);

      var xStart = delta * i, yStart = y_start - proekcia * this.c.position.z,
        xDelta = delta + 1, yDelta = proekcia

      if (ray?.GObj?.texture) {
        var NumberRays = ray.GObj.rindringMetaData.mashQuantityRaysNum[ray.mashIndex];

        var texturWidthCutStart = ray.GObj.texture.width / (NumberRays) * Math.floor(NumberRays / ray.texturProcent)
        var texturWidthCutSegment = ray.GObj.texture.width / (NumberRays);

        switch (ray?.GObj?.mash.texturingMetod) {
          case 'segment':
            break;
          case 'full':
            var coficent =  ray.GObj.texture.width / ray.GObj.mash.RFullMashRanges ;

            var texturSegmentStart = ray.GObj.mash.RMashRanges_iSum(ray.mashIndex) * coficent;
            var texturSegmentSegment =  ray.GObj.mash.RMashRanges[ray.mashIndex] * coficent;

            texturWidthCutStart = ray.GObj.texture.width  - texturSegmentStart -texturSegmentSegment + texturSegmentSegment / (NumberRays) * Math.floor(NumberRays / ray.texturProcent)
            texturWidthCutSegment = texturSegmentSegment / NumberRays;
            break;
        }

       


        this.ctx.drawImage(
          ray.GObj.texture,
          texturWidthCutStart,
          0,
          texturWidthCutSegment,
          ray.GObj.texture.height,
          Math.floor(xStart),
          Math.floor(yStart),
          Math.floor(xDelta),
          Math.floor(yDelta),
        );
      }
      else {
        this.ctx.fillRect(xStart, yStart, xDelta, yDelta);
      }
      }
    }
  }
  segmentPaint(ray) { }
}
