"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlSearch = void 0;

var getUrlSearch = function getUrlSearch(searchStr) {
  var params = {};
  var urls = searchStr.split("?");
  var arr = urls[1].split("&");

  for (var i = 0, l = arr.length; i < l; i++) {
    var a = arr[i].split("=");
    params[a[0]] = a[1];
  }

  return params;
};

exports.getUrlSearch = getUrlSearch;