const chai = require('chai');
const expect = chai.expect;
const FakeStat = require("../../../../build/lib.js").Interface.FakeStat;


describe("FakeStat", () => {
    describe("#name", () => {
        it("Should return a static value", () => {
            let fake = new FakeStat();
            expect(fake.name()).to.equal("FakeStat");
        });
    });

    describe("#effortValue", () => {
        it("Should return a static value", () => {
            let fake = new FakeStat();
            expect(fake.effortValue()).to.equal(-1);
        });
    });

    describe("#baseValue", () => {
        it("Should return a static value", () => {
            let fake = new FakeStat();
            expect(fake.baseValue()).to.equal(-1);
        });
    });

    describe("#toJSON", () => {
        it("Should return a static object", () => {
            let fake = new FakeStat();
            expect(fake.toJSON()).to.deep.equal({ name: "FakeStat", effortValue: -1, baseValue: -1 });
        });
    });

    describe("#equals", () => {
        it("Should return true", () => {
            let fake = new FakeStat();
            expect(fake.equals(fake)).to.be.true;
        });
    });
});