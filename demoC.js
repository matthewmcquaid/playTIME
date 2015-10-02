/**
 * Created by Matthew McQuaid
 */

/*jslint node: true */

'use strict';

var someValue = "100";
var anotherValue = 100;

var whatIsThis = function () {
  return someValue === anotherValue ? "TRUE" : "FALSE";
};

var whatIsThat = function () {
  var anotherValue = "100";
  return someValue === anotherValue ? "TRUE" : "FALSE";
};

var whatWillHappen = function () {

  var result = thisValue === anotherValue ? "TRUE" : "FALSE";

  var thisValue = 100;

  return result;
};

console.log("1: ");

if (someValue == anotherValue) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

console.log("2: ");
console.log(whatIsThis());

console.log("3: ");
console.log(whatIsThat());


console.log("4: ");
console.log(whatWillHappen());





