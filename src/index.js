
exports.min = function min (array) {

  let newArray = [],
      sortedArray = [];

  if (array == undefined){
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    if (typeof parseFloat(array[i]) == 'number'){
      newArray[i] = array[i];
    } else {
      newArray[i] = 0;
    };
  };
  sortedArray = newArray.sort(function(a,b){ 
    return a - b;
  });
  if (sortedArray[0]){
    return sortedArray[0];
  } 
  return 0;
}

exports.max = function max (array) {
  let newArray = [],
      sortedArray = [];

  if (array == undefined || array.length == 0){
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    if (typeof parseFloat(array[i]) == 'number'){
      newArray[i] = array[i];
    } else {
      newArray[i] = 0;
    };
  };
  sortedArray = newArray.sort(function(a,b){ 
    return b - a;
  });
  if (sortedArray[0]){
    return sortedArray[0];
  } 
  return 0;
}

exports.avg = function avg (array) {
  let newArray = [],
      sumOfArr = 0,
      resultAVG = 0;

  if (array == undefined || array.length == 0){
    return 0;
  }

  for (let i = 0; i < array.length; i++){
    if (typeof parseFloat(array[i]) == 'number'){
      sumOfArr += array[i];
    };
  };

  if (sumOfArr){
    return (sumOfArr / array.length);
  } 
  return 0;
}
