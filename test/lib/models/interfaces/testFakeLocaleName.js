const chai = require('chai');
const expect = chai.expect;
const FakeLocaleName = require("../../../../build/lib.js").Interface.FakeLocaleName;


describe("FakeLocaleName", () => {

    describe("#name", () => {
        it("Should return a static name", () => {
            let fake = new FakeLocaleName();
            expect(fake.name()).to.equal("Name");
        });
    });

    describe("#languageCode", () => {
        it("Should return a static code", () => {
            let fake = new FakeLocaleName();
            expect(fake.languageCode()).to.equal("en");
        });
    });

    describe("#toJSON", () => {
        it("Should return a serialised object", () => {
            let fake = new FakeLocaleName();
            expect(fake.toJSON()).to.deep.equal({ name: "Name", languageCode: "en" });
        });
    });

    describe("#equals", () => {
        it("Should return true", () => {
            let fake = new FakeLocaleName();
            expect(fake.equals(fake)).to.be.true;
        })
    });

});