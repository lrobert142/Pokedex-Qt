var chai = require('chai');
var expect = chai.expect;
var Email = require('../../../build/lib.js').Models.Email;

describe("Email", () => {

    describe("The constructor", () => {
        it("should construct with a valid email address", () => {
            var email = new Email("xander@axrs.io");

            expect(email.get()).to.equal("xander@axrs.io");
        });

        it("should convert it to lowercase", () => {
            var email = new Email("XANDER@axrs.io");

            expect(email.get()).to.equal("xander@axrs.io");
        });

        it("should throw an error if an email is invalid", () => {
            expect(() => {
                new Email("anInvalidEmail");
            }).to.throw(TypeError, "Invalid email address. [RFC 5322]");
        });
    });

    describe("The equals method", () => {
        it("should return true if two emails are compared against each other", () => {
            var email1 = new Email("XANDER@axrs.io");
            var email2 = new Email("xander@axrs.io");

            expect(email1.equals(email2)).to.equal(true);
        });

        it("should return false if the compared emails are invalid", () => {
            var email1 = new Email("you@axrs.io");
            var email2 = new Email("me@axrs.io");

            expect(email1.equals(email2)).to.equal(false);
        });

        it("should return true if an email is compared against a string", () => {
            var email = new Email("XANDER@axrs.io");
            expect(email.equals("xander@axrs.io")).to.equal(true);
        });

        it("should return false if an email is compared against a string is incorrect", () => {
            var email = new Email("you@axrs.io");
            expect(email.equals("me@axrs.io")).to.equal(false);
        });
    });

    describe("the toJSON method", () => {
        it("should export the model as a plain JSON Object", () => {
            var email = new Email("you@axrs.io");
            expect(email.toJSON()).to.deep.equal("you@axrs.io");
        });
    });

});