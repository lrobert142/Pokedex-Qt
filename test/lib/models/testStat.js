var chai = require('chai');
var expect = chai.expect;
var Stat = require('../../../build/lib.js').Model.Stat;
var ModelValidationException = require('../../../build/lib.js').Exception.ModelValidationException;


describe("Stat", () => {
    describe("constructor", () => {
        it("Should throw an error if any data is missing", () => {
            expect(() => {
                let stat = new Stat({});
            }).to.throw(ModelValidationException, "name,effortValue,baseValue field(s) missing.");
        });

        it("Should create a new instance of Stat", () => {
            let stat = new Stat({ name: "FakeStat", effortValue: -1, baseValue: -1 });
            expect(stat.name()).to.equal("FakeStat");
            expect(stat.effortValue()).to.equal(-1);
            expect(stat.baseValue()).to.equal(-1);
        });
    });

    describe("#name", () => {
        it("Should return the name of the stat", () => {
            let stat = new Stat({ name: "FakeStat", effortValue: -1, baseValue: -1 });
            expect(stat.name()).to.equal("FakeStat");
        });
    });

    describe("#effortValue", () => {
        it("Should return the effort values associated with the stat", () => {
            let stat = new Stat({ name: "FakeStat", effortValue: -1, baseValue: -1 });
            expect(stat.effortValue()).to.equal(-1);
        });
    });

    describe("#baseValue", () => {
        it("Should return the base value of the stat", () => {
            let stat = new Stat({ name: "FakeStat", effortValue: -1, baseValue: -1 });
            expect(stat.baseValue()).to.equal(-1);
        });
    });

});