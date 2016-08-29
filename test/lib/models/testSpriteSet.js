const chai = require('chai');
const expect = chai.expect;
const SpriteSet = require("../../../build/lib.js").Model.SpriteSet;
const ModelValidationException = require("../../../build/lib.js").Exception.ModelValidationException;

describe("SpriteSet", () => {
    describe("constructor", () => {
        it("Should throw an error if any data is missing", () => {
            expect(() => {
                let spriteSet = new SpriteSet({});
            }).to.throw(ModelValidationException, "");
        });

        it("Should create a new SpriteSet instance", () => {
            let spriteSet = new SpriteSet({
                backDefault: "http://www.fake.com/backDefault",
                backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny",
                backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault",
                frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny",
                frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            });
            expect(spriteSet.backDefault()).to.equal("http://www.fake.com/backDefault");
            expect(spriteSet.backFemale()).to.equal("http://www.fake.com/backFemale");
            expect(spriteSet.backShiny()).to.equal("http://www.fake.com/backShiny");
            expect(spriteSet.backShinyFemale()).to.equal("http://www.fake.com/backShinyFemale");
            expect(spriteSet.frontDefault()).to.equal("http://www.fake.com/frontDefault");
            expect(spriteSet.frontFemale()).to.equal("http://www.fake.com/frontFemale");
            expect(spriteSet.frontShiny()).to.equal("http://www.fake.com/frontShiny");
            expect(spriteSet.frontShinyFemale()).to.equal("http://www.fake.com/frontShinyFemale");
        });
    });

    describe("#toJSON", () => {
        it("should export the model as a plain JSON Object", () => {
            let spriteSet = new SpriteSet({
                backDefault: "http://www.fake.com/backDefault",
                backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny",
                backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault",
                frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny",
                frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            });
            expect(spriteSet.toJSON()).to.deep.equal({
                backDefault: "http://www.fake.com/backDefault",
                backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny",
                backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault",
                frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny",
                frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            });
        });
    });

    describe("#equals", () => {
        it("Should return false if properties are not identical", () => {
            let spriteSet1 = new SpriteSet({
                backDefault: "http://www.fake.com/backDefault",
                backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny",
                backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault",
                frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny",
                frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            });
            let spriteSet2 = new SpriteSet({
                backDefault: "",
                backFemale: "",
                backShiny: "",
                backShinyFemale: "",
                frontDefault: "",
                frontFemale: "",
                frontShiny: "",
                frontShinyFemale: ""
            });
            expect(spriteSet1.equals(spriteSet2)).to.be.false;
        });

        it("Should return true if properties are identical", () => {
            const spriteSetData = {
                backDefault: "http://www.fake.com/backDefault",
                backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny",
                backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault",
                frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny",
                frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            };
            let spriteSet1 = new SpriteSet(spriteSetData);
            let spriteSet2 = new SpriteSet(spriteSetData);
            expect(spriteSet1.equals(spriteSet2)).to.be.true;
        });
    });
});