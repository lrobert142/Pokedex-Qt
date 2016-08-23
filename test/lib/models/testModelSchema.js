var chai = require('chai');
var expect = chai.expect;
var ModelSchema = require('../../../build/lib.js').Model.ModelSchema;
var ModelValidationException = require('../../../build/lib.js').Exception.ModelValidationException;

describe("ModelSchema", () => {

    describe("constructor", () => {
        it("should construct a new ModelSchema instance", () => {
            let schema = new ModelSchema({});

            expect(schema.schema()).to.deep.equal({});
        });
    });

    describe("validate", () => {
        it("should throw an error if the data-set is missing properties", () => {
            let schema = new ModelSchema({ data1: String, data2: Boolean });
            let obj = { data1: "String" };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should throw an error if the data-set is not of the right type (nested data)", () => {
            let schema = new ModelSchema({ data: { data2: String } });
            let obj = { data: {} };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should throw an error if the data-set is not of the right type (non-undefined data)", () => {
            let schema = new ModelSchema({ data: String });
            let obj = { data: true };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should throw an error if the data-set is not of the right type (undefined data)", () => {
            let schema = new ModelSchema({ data: String });
            let obj = { data: undefined };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should throw an error if the data-set is not of the right type (Array)", () => {
            let schema = new ModelSchema({ data: [String] });
            let obj = { data: [false] };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should throw an error if the data-set is not of the right type (nested data)", () => {
            let schema = new ModelSchema({ data: { data2: String } });
            let obj = { data: { data2: false } };

            expect(() => {
                schema.validate(obj);
            }).to.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Boolean)", () => {
            let schema = new ModelSchema({ data: Boolean });
            let obj = { data: true };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (String)", () => {
            let schema = new ModelSchema({ data: String });
            let obj = { data: "String" };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Number)", () => {
            let schema = new ModelSchema({ data: Number });
            let obj = { data: 1 };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Array)", () => {
            let schema = new ModelSchema({ data: Array });
            let obj = { data: [] };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Object Array)", () => {
            let schema = new ModelSchema({ data: [Object, Object] });
            let obj = { data: [{}, {}] };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Object schema, Object data)", () => {
            let schema = new ModelSchema({ data: Object });
            let obj = { data: {} };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Object schema, null data)", () => {
            let schema = new ModelSchema({ data: Object });
            let obj = { data: null };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Object with nested properties)", () => {
            let schema = new ModelSchema({ data: { data2: Boolean } });
            let obj = { data: { data2: true } };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });

        it("should not throw an error if the data-set matches the schema (Object with nested properties and nested arrays)", () => {
            let schema = new ModelSchema({ data1: { data2: Boolean }, data3: [{ data4: String }] });
            let obj = { data1: { data2: true }, data3: [{ data4: "string" }] };

            expect(() => {
                schema.validate(obj);
            }).to.not.throw(ModelValidationException);
        });
    });

    describe("equals", () => {
        it("should return false if schema properties are not identical (different types, same name)", () => {
            let schema1 = new ModelSchema({ data: Boolean });
            let schema2 = new ModelSchema({ data: String });

            expect(schema1.equals(schema2)).to.equal(false);
        });

        it("should return false if schema properties are not identical (different names, same type)", () => {
            let schema1 = new ModelSchema({ data1: Boolean });
            let schema2 = new ModelSchema({ data2: Boolean });

            expect(schema1.equals(schema2)).to.equal(false);
        });

        it("should return true if schema properties are identical", () => {
            let schema1 = new ModelSchema({ data: Boolean });
            let schema2 = new ModelSchema({ data: Boolean });

            expect(schema1.equals(schema2)).to.equal(true);
        });

        it("should return true if schema properties are identical (nested objects)", () => {
            let schema1 = new ModelSchema({ data: { data2: Boolean } });
            let schema2 = new ModelSchema({ data: { data2: Boolean } });

            expect(schema1.equals(schema2)).to.equal(true);
        });
    });

    describe("toJSON", () => {
        it("should export the model as a plain JSON Object", () => {
            let schema = new ModelSchema({ data: Boolean });

            expect(schema.toJSON()).to.deep.equal({
                schema: {
                    data: Boolean
                }
            });
        });

        it("should export the model as a plain JSON Object (nested objects)", () => {
            let schema = new ModelSchema({ data: { data2: Boolean } });

            expect(schema.toJSON()).to.deep.equal({
                schema: {
                    data: { data2: Boolean }
                }
            });
        });
    });

});