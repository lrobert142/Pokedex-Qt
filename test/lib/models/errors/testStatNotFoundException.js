const chai = require('chai');
const expect = chai.expect;
const StatNotFoundException = require("../../../../build/lib.js").Exception.StatNotFoundException;

describe("StatNotFoundException", () => {
    describe("Constructor", () => {
        it("Should create a new StatNotFoundException instance", () => {
            let exception = new StatNotFoundException("Stat is missing");
            expect(exception.name).to.equal("StatNotFoundException");
            expect(exception.message).to.equal("Stat is missing");
            expect(exception.stack).to.not.equal(undefined);
            expect(exception instanceof Error);
        });
    });
});