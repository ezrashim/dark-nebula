exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == (item)) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {count++}
    }
    return count;
  },

  duplicates : function(arr) {
    arr.sort();
    var newArray = []
    for (var i=0; i < arr.length; i++) {
      if (arr[i + 1] == arr[i]) {
        newArray.push(arr[i]);
      }
      if (newArray[newArray.length - 2] == arr[i]) {
        newArray.splice(newArray.length - 1, 1)
      }
    }
    return newArray;
  },

  square : function(arr) {
    for (var i=0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var newArray =[];
    for (var i=0; i < arr.length; i++) {
      if (target == arr[i]) {
      var index = arr.indexOf(target, i);
      newArray.push(index);
      }
    }
  return newArray;
  }
};
