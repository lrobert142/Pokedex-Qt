const chai = require('chai');
const expect = chai.expect;
const ModelValidationException = require('../../../../build/lib.js').Exception.ModelValidationException;

describe("ModelValidationError", () => {

    describe("Constructor", () => {
        it("Should create a new ModelValidationException instance", () => {
            let exception = new ModelValidationException("Missing fields: foo,bar");
            expect(exception.name).to.equal("ModelValidationException");
            expect(exception.message).to.equal("Missing fields: foo,bar");
            expect(exception.stack).to.not.equal(undefined);
            expect(exception instanceof Error);
        });
    });

});