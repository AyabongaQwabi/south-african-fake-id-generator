"use strict";

var saIdParser = require("south-african-id-parser");

var moment = require("moment");

var randomValueBetween = function randomValueBetween(min, max) {
  return Math.random() * (max - min) + min;
};

var randomDate = function randomDate(d1, d2) {
  var date1 = d1 || "01-01-1970";
  var date2 = d2 || new Date();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  return date1 > date2 ? new Date(randomValueBetween(date2, date1)) : new Date(randomValueBetween(date1, date2));
};

var getRandomSexDigits = function getRandomSexDigits() {
  return Math.floor(1000 + Math.random() * 9000);
};

var getFormatedRandomDate = function getFormatedRandomDate(age) {
  var currentYear = new Date().getFullYear();
  var yearAge = currentYear - age;
  var ageYrBegin = "".concat(yearAge, "/01/01");
  var ageYrEnd = "".concat(yearAge, "/12/31");
  var randomdate = randomDate(ageYrBegin, ageYrEnd);
  return moment(randomdate).format("YYMMDD");
};

var getRandomCitizenshipDigit = function getRandomCitizenshipDigit() {
  return randomValueBetween(0, 1);
};

var getRandomZdigit = function getRandomZdigit() {
  return randomValueBetween(80, 89);
};

var _generateFakeId = function _generateFakeId(age) {
  var date = getFormatedRandomDate(age);
  var sex = getRandomSexDigits();
  var citizenship = Math.round(getRandomCitizenshipDigit());
  var zDigit = Math.round(getRandomZdigit());
  return "".concat(date).concat(sex).concat(citizenship).concat(zDigit);
};

var generateFakeIdByAge = function generateFakeIdByAge(age) {
  var fakeId = _generateFakeId(age);

  var isValid = saIdParser.validate(fakeId);
  return isValid ? fakeId : generateFakeIdByAge(age);
};

exports.generateFakeIdByAge = generateFakeIdByAge;

var generateInvalidFakeIdByAge = function generateInvalidFakeIdByAge(age) {
  var fakeId = _generateFakeId(age);

  var isValid = saIdParser.validate(fakeId);
  return !isValid ? fakeId : generateInvalidFakeIdByAge(age);
};

exports.generateInvalidFakeIdByAge = generateInvalidFakeIdByAge;

exports.generateFakeId = function () {
  var age = Math.floor(Math.random() * 90 + 10);
  return generateFakeIdByAge(age);
};

exports.generateInvalidFakeId = function () {
  var age = Math.floor(Math.random() * 90 + 10);
  return generateInvalidFakeIdByAge(age);
};

exports.isValid = function (id) {
  return saIdParser.validate(id);
};