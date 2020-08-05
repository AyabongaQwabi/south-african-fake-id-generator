var saIdParser = require("south-african-id-parser");
var moment =  require("moment");

const randomValueBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomDate = (d1, d2) => {
  let date1 = d1 || "01-01-1970";
  let date2 = d2 || new Date();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  return date1 > date2 ? new Date(randomValueBetween(date2, date1)) : new Date(randomValueBetween(date1, date2));
};

const getRandomSexDigits = () => Math.floor(1000 + Math.random() * 9000);

const getFormatedRandomDate = (age) => {
  const currentYear = new Date().getFullYear();
  const yearAge = currentYear - age;
  const ageYrBegin = `${yearAge}/01/01`;
  const ageYrEnd = `${yearAge}/12/31`;
  const randomdate = randomDate(ageYrBegin, ageYrEnd);
  return moment(randomdate).format("YYMMDD");
};

const getRandomCitizenshipDigit = () => randomValueBetween(0, 1);

const getRandomZdigit = () => randomValueBetween(80, 89);

const generateFakeId = (age) => {
  const date = getFormatedRandomDate(age);
  const sex = getRandomSexDigits();
  const citizenship = Math.round(getRandomCitizenshipDigit());
  const zDigit = Math.round(getRandomZdigit());
  return `${date}${sex}${citizenship}${zDigit}`;
};

var generateFakeIdByAge = function(age) {
    const fakeId = generateFakeId(age);
    const isValid = saIdParser.validate(fakeId);
    return isValid ? fakeId : generateFakeIdByAge(age);
}

exports.generateFakeIdByAge = generateFakeIdByAge;

var generateInvalidFakeIdByAge = function(age) {
    const fakeId = generateFakeId(age);
    const isValid = saIdParser.validate(fakeId);
    return !isValid ? fakeId : generateInvalidFakeIdByAge(age);
}
exports.generateInvalidFakeIdByAge = generateInvalidFakeIdByAge;

exports.generateRandomId = function() {
    const age = Math.floor(Math.random() * 90 + 10);
    return generateFakeIdByAge(age);
}

exports.generateInvalidRandomId = function() {
    const age = Math.floor(Math.random() * 90 + 10);
    return generateInvalidFakeIdByAge(age);
}

exports.isValid = function(id) {
    return saIdParser.validate(id);
}