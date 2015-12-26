exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    if (str.match(/\d+/)) {
      return true;
    } else {
      return false;
    }

  },

  containsRepeatingLetter : function(str) {
    return (/([a-zA-Z])\1+/).test(str);

  },

  endsWithVowel : function(str) {
    return (/[aeiouAEIOU]$/).test(str);
  },

  captureThreeNumbers : function(str) {
    var result =str.match(/\d{3}/)
    if (result == null) {
      return false;
    } else {
    return result[0];
    }
  },

  matchesPattern : function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD : function(str) {
    return (/^\$(\d+)(([,]?(\d{3}))*)?(\.\d{2})?$/).test(str);
  }
};
