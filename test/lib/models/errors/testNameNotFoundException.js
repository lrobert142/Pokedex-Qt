const chai = require('chai');
const expect = chai.expect;
const NameNotFoundException = require("../../../../build/lib.js").Exception.NameNotFoundException;

describe("NameNotFoundException", () => {
    describe("Constructor", () => {
        it("Should create a new NameNotFoundException instance", () => {
            let exception = new NameNotFoundException("Name is missing");
            expect(exception.name).to.equal("NameNotFoundException");
            expect(exception.message).to.equal("Name is missing");
            expect(exception.stack).to.not.equal(undefined);
            expect(exception instanceof Error);
        });
    });
});