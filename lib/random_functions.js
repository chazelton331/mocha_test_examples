"use strict";

var randomFunctions = (function _randomFunctions() {

  var add = function _add(number1, number2) {
        return number1 + number2;
      },

      multiply = function _multiply(number1, number2) {
        return number1 * number2;
      },

      cheer = function _cheer(name) {
        if (name) {
          return "Hooray, " + name;
        } else {
          return "Hooray, beer";
        }
      };

  return {
    add: add,
    multiply: multiply,
    cheer: cheer
  };

})();

exports = module.exports = randomFunctions;
