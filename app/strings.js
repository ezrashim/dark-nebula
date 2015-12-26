exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newArray = []
    var arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != newArray[newArray.length - 1]) {
        newArray.push(arr[i]);
      } else if (arr[i] != newArray[newArray.length - amount]) {
        newArray.push(arr[i]);
      }
    }
    return newArray.join('');
  },
  wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i].length;
    if (count >= cols) {
      arr[i] = arr[i] + '\n';
      count = 0;
    } else if (i == arr.length -1) {
      arr[i] = arr[i];
      count = 0;
    } else if (arr[i].length + arr[i+1].length >= cols) {
      arr[i] = arr[i] + '\n';
      count = 0;
    } else {
        arr[i] = arr[i] + ' ';
        count++;
    }
  }
    return arr.join('');
  },
  reverseString: function(str) {
    var arr = str.split('');
    arr = arr.reverse();
    arr = arr.join('');
    return arr;
  }
};
