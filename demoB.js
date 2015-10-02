/**
 * Created by Matthew McQuaid
 */

/*jslint node: true */

'use strict';

var $ = require('jquery-deferred'),
  myService = require('./lib/myService');

$.when(myService.doThat())
  .then(function (result) {

    console.log("It succeeded! with: " + result);

  }).fail(function () {

    console.log("It failed!");

  }).always(function () {

    console.log("The End...");

  });