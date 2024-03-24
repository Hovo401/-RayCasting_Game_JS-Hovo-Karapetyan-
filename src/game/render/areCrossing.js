
// // функция для получения пересичения 2-ух отрерзков
// function areCrossing(v11, v12, v21, v22) {
//   var Z = 2;
//   var X = 0;
//   var Y = 1;

//   var cut1 = [v12[X] - v11[X], v12[Y] - v11[Y], 0];
//   var cut2 = [v22[X] - v21[X], v22[Y] - v21[Y], 0];

//   var crossProduct = (a, b) => [
//       a[1] * b[2] - a[2] * b[1],
//       a[2] * b[0] - a[0] * b[2],
//       a[0] * b[1] - a[1] * b[0]
//   ];

//   var prod1 = crossProduct(cut1, [v21[X] - v11[X], v21[Y] - v11[Y], 0]);
//   var prod2 = crossProduct(cut1, [v22[X] - v11[X], v22[Y] - v11[Y], 0]);

//   if (Math.sign(prod1[Z]) === Math.sign(prod2[Z]) || prod1[Z] === 0 || prod2[Z] === 0)
//       return null;

//   prod1 = crossProduct(cut2, [v11[X] - v21[X], v11[Y] - v21[Y], 0]);
//   prod2 = crossProduct(cut2, [v12[X] - v21[X], v12[Y] - v21[Y], 0]);

//   if (Math.sign(prod1[Z]) === Math.sign(prod2[Z]) || prod1[Z] === 0 || prod2[Z] === 0)
//       return null;

//   var crossing = [];
//   crossing[0] = v11[X] + cut1[X] * Math.abs(prod1[Z]) / Math.abs(prod2[Z] - prod1[Z]);
//   crossing[1] = v11[Y] + cut1[Y] * Math.abs(prod1[Z]) / Math.abs(prod2[Z] - prod1[Z]);

//   return crossing;
// }


function areCrossing(v11, v12, v21, v22) {
  var x1 = v11[0], y1 = v11[1];
  var x2 = v12[0], y2 = v12[1];
  var x3 = v21[0], y3 = v21[1];
  var x4 = v22[0], y4 = v22[1];

  var det = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (det === 0) return null; // Отрезки параллельны или совпадают

  var t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / det;
  var u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / det;

  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    var crossingX = x1 + t * (x2 - x1);
    var crossingY = y1 + t * (y2 - y1);
    return [crossingX, crossingY];
  } else {
    return null;
  }
}


export { areCrossing };
