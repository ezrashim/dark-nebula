exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // Optional Challenge

    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    // Optional Challenge
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    // Optional Challenge
    array =[];
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        array.push(property + ": " + obj[property])
      }
    }
    return array;
  }
};
