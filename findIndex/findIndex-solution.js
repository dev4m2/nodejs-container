function findIndex (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return i;
      }
    }   
    return -1;
  }
  
  var arr = [3,4,6,2,1];
  var result = findIndex(arr, function(num, index, array) {
    return num === 6;
  });
  
  console.log(result);
  