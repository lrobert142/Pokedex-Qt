var chai = require('chai');
var expect = chai.expect;

describe("Mocha Tests", () => {
    it("should evaluate true", (done)=>{
        expect(true).to.equal(true);
        done();
    });
});