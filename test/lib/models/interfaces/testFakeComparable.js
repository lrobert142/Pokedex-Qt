const chai = require('chai');
const expect = chai.expect;
const FakeComparable = require("../../../../build/lib.js").Interface.FakeComparable;

describe("FakeComparable", () => {
    describe("#equals", () => {
        it("Should return true if comparator is an instance of FakeComparable", () => {
            let fake = new FakeComparable();
            expect(fake.equals(fake)).to.be.true;
        });

        it("Should return false if comparator is not an instance of FakeComparable", () => {
            let fake = new FakeComparable();
            expect(fake.equals(null)).to.be.false;
        });
    });
});