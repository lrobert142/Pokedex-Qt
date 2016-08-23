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
        let fake = new FakeLocaleName();
        expect(fake.languageCode()).to.equal("en");
    });

});