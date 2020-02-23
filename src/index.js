
exports.min = function min (array = []) {
  let min = array[0];

  if(array.length == 0){
    min = 0;
  } else {
    for(let i = 1; i < array.length; i++) {
      if(array[i] < min) {
        min = array[i];
      }
    }
  }
  
  return min;
}

exports.max = function max (array = []) {
  let max = array[0];
  if(array.length == 0) {
    max = 0;
  } else {
    for(let i = 1; i < array.length; i++) {
      if(array[i] > max) {
        max = array[i];
      }
    }
  }
  return max;
}

exports.avg = function avg (array = []) {
  return array.length == 0 ? 0 : array.reduce((prev, curent) => prev + curent) / array.length;
}
