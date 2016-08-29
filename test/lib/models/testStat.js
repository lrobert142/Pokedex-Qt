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
});