/**
 * Created by Matthew McQuaid
 */

/*jslint node: true */

'use strict';

var $ = require('jquery-deferred');

var getGetCompleteAfterLength = function (completeAfter) {
  return completeAfter ? completeAfter : 100;
};

exports.doThis = function (completeAfter) {

  var deferred = $.Deferred();

  setTimeout(function () {
    deferred.resolve("completed");
  }, getGetCompleteAfterLength(completeAfter));

  return deferred;

};


exports.doThat = function (completeAfter) {

  var deferred = $.Deferred();

  setTimeout(function () {
    deferred.reject();
  }, getGetCompleteAfterLength(completeAfter));

  return deferred;

};
