const chai = require('chai');
const expect = chai.expect;
const FakeJSONable = require("../../../../build/lib.js").Interface.FakeJSONable;

describe("FakeJSONable", () => {
    describe("#toJSON", () => {
        it("Should return a static object", () => {
            let fake = new FakeJSONable();
            expect(fake.toJSON()).to.deep.equal({foo: "bar"});
        });
    });
});