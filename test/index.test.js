var fakeSaIdGenerator = require('../index.js');
var expect = require('chai').expect;
var saIdParser = require('south-african-id-parser');
var moment = require('moment');

describe('fakeSaIdGenerator', function() {
  context('generateFakeId', function() {
    it('should generate random 13 digit rsa id', function() {
        var fakeId = fakeSaIdGenerator.generateFakeId()
        expect(fakeId).to.be.an('string').that.includes(8);
        expect(fakeId).to.have.lengthOf(13);
    })
    it('should generate a valid rsa id', function() {
        var validIdNumber = fakeSaIdGenerator.generateFakeId();
        var isValid = saIdParser.validate(validIdNumber);
        expect(isValid).to.be.equal(true);
    })
  })
  context('generateInvalidFakeId', function() {
    it('should generate random 13 digit rsa id', function() {
        var fakeId = fakeSaIdGenerator.generateInvalidFakeId()
        expect(fakeId).to.be.an('string').that.includes(8);
        expect(fakeId).to.have.lengthOf(13);
    })
    it('should generate an invalid rsa id', function() {
        var invalidIdNumber = fakeSaIdGenerator.generateInvalidFakeId();
        var isValid = saIdParser.validate(invalidIdNumber);
        expect(isValid).to.be.equal(false);
    })
  })
  context('generateFakeIdByAge', function() {
    it('should generate 13 digit rsa id by input age', function() {
        var age = 27;
        var fakeId = fakeSaIdGenerator.generateFakeIdByAge(age)
        var idYear = moment(fakeId.substring(0, 7), "YYMMDD").year();
        var currentYear = moment().year();
        expect(fakeId).to.be.an('string').that.includes(8);
        expect(fakeId).to.have.lengthOf(13);
        expect(currentYear - idYear).to.be.equal(age);
    })
    it('should generate a valid rsa id', function() {
        var age = 27;
        var fakeId = fakeSaIdGenerator.generateFakeIdByAge(age)
        var isValid = saIdParser.validate(fakeId);
        expect(isValid).to.be.equal(true);
    })
  })
  context('generateInvalidFakeIdByAge', function() {
    it('should generate a 13 digit rsa id by input age', function() {
        var age = 27;
        var fakeId = fakeSaIdGenerator.generateInvalidFakeIdByAge(age)
        var idYear = moment(fakeId.substring(0, 7), "YYMMDD").year();
        var currentYear = moment().year();
        expect(fakeId).to.be.an('string').that.includes(8);
        expect(fakeId).to.have.lengthOf(13);
        expect(currentYear - idYear).to.be.equal(age);
    })
    it('should generate an invalid rsa id', function() {
        var age = 27;
        var fakeId = fakeSaIdGenerator.generateInvalidFakeIdByAge(age)
        var isValid = saIdParser.validate(fakeId);
        expect(isValid).to.be.equal(false);
    })
  })
  context('isValid', function() {
    it('should validate id number', function() {
        expect(fakeSaIdGenerator.isValid("9701286633088")).to.be.equal(false);
    })
  })
})
