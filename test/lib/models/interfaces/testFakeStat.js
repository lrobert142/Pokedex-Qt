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
});