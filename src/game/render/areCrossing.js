
// функция для получения пересичения 2-ух отрерзков
function areCrossing(v11, v12, v21, v22) {
  const d1 = (v21[0] - v11[0]) * (v12[1] - v11[1]) - (v21[1] - v11[1]) * (v12[0] - v11[0]);
  const d2 = (v22[0] - v11[0]) * (v12[1] - v11[1]) - (v22[1] - v11[1]) * (v12[0] - v11[0]);
  const d3 = (v11[0] - v21[0]) * (v22[1] - v21[1]) - (v11[1] - v21[1]) * (v22[0] - v21[0]);
  const d4 = (v12[0] - v21[0]) * (v22[1] - v21[1]) - (v12[1] - v21[1]) * (v22[0] - v21[0]);

  if ((d1 * d2 < 0) && (d3 * d4 < 0)) {
    const factor = d3 / (d3 - d4);
    return [v21[0] + (v22[0] - v21[0]) * factor, v21[1] + (v22[1] - v21[1]) * factor];
  }
  return null;
}


function perebor(arr0, arr1) {
  const arrOut = [];

  for (let i = 0; i < arr0.length; i++) {
    const el0 = arr0[i];
    for (let j = 0; j < arr1.length; j++) {
      const el1 = arr1[j];

      // проверка пересечения ограничивающих прямоугольников
      if (el0[0][0] <= el1[1][0] && el0[1][0] >= el1[0][0] && el0[0][1] <= el1[1][1] && el0[1][1] >= el1[0][1]) {
        const logic = areCrossing(el0[0], el0[1], el1[0], el1[1]);
        if (logic) {
          arrOut.push(logic);
        }
      }
    }
  }
  return arrOut;
}


export {  perebor, areCrossing };
