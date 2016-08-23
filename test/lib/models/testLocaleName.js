const chai = require('chai');
const expect = chai.expect;
const LocaleName = require("../../../build/lib.js").Model.LocaleName;
const ModelValidationException = require("../../../build/lib.js").Exception.ModelValidationException;

describe("LocaleName", () => {

    describe("constructor", () => {
        it("Should throw an exception if data is missing", () => {
            expect(() => {
                let name = new LocaleName({});
            }).to.throw(ModelValidationException, "name,languageCode field(s) missing.");
        });

        it("Should throw an exception if data is of the wrong type", () => {
            expect(() => {
                let name = new LocaleName({ name: 1, languageCode: "en" })
            }).to.throw(ModelValidationException, 'Value "name" of type "number" does not match schema type "string"');
        });

        it("Should create a new instance of LocaleName", () => {
            let name = new LocaleName({ name: "Unit Test", languageCode: "en" });
            expect(name.name()).to.equal("Unit Test");
            expect(name.languageCode()).to.equal("en");
        });
    });

    describe("#name", () => {
        it("Should return the name", () => {
            let name = new LocaleName({ name: "Unit Test", languageCode: "en" });
            expect(name.name()).to.equal("Unit Test");
        });
    });

    describe("#languageCode", () => {
        it("Should return the languageCode", () => {
            let name = new LocaleName({ name: "Unit Test", languageCode: "en" });
            expect(name.languageCode()).to.equal("en");
        });
    });

});