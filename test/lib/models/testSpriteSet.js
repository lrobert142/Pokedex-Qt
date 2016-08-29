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
                backDefault: "backDefault",
                backFemale: "backFemale",
                backShiny: "backShiny",
                backShinyFemale: "backShinyFemale",
                frontDefault: "frontDefault",
                frontFemale: "frontFemale",
                frontShiny: "frontShiny",
                frontShinyFemale: "frontShinyFemale"
            });
            expect(spriteSet.backDefault()).to.equal("backDefault");
            expect(spriteSet.backFemale()).to.equal("backFemale");
            expect(spriteSet.backShiny()).to.equal("backShiny");
            expect(spriteSet.backShinyFemale()).to.equal("backShinyFemale");
            expect(spriteSet.frontDefault()).to.equal("frontDefault");
            expect(spriteSet.frontFemale()).to.equal("frontFemale");
            expect(spriteSet.frontShiny()).to.equal("frontShiny");
            expect(spriteSet.frontShinyFemale()).to.equal("frontShinyFemale");
        });
    });

    describe("#toJSON", () => {
        it("should export the model as a plain JSON Object", () => {
            let spriteSet = new SpriteSet({
                backDefault: "backDefault",
                backFemale: "backFemale",
                backShiny: "backShiny",
                backShinyFemale: "backShinyFemale",
                frontDefault: "frontDefault",
                frontFemale: "frontFemale",
                frontShiny: "frontShiny",
                frontShinyFemale: "frontShinyFemale"
            });
            expect(spriteSet.toJSON()).to.deep.equal({
                backDefault: "backDefault",
                backFemale: "backFemale",
                backShiny: "backShiny",
                backShinyFemale: "backShinyFemale",
                frontDefault: "frontDefault",
                frontFemale: "frontFemale",
                frontShiny: "frontShiny",
                frontShinyFemale: "frontShinyFemale"
            });
        });
    });

    describe("#equals", () => {
        it("Should return false if properties are not identical", () => {
            let spriteSet1 = new SpriteSet({
                backDefault: "backDefault",
                backFemale: "backFemale",
                backShiny: "backShiny",
                backShinyFemale: "backShinyFemale",
                frontDefault: "frontDefault",
                frontFemale: "frontFemale",
                frontShiny: "frontShiny",
                frontShinyFemale: "frontShinyFemale"
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
                backDefault: "backDefault",
                backFemale: "backFemale",
                backShiny: "backShiny",
                backShinyFemale: "backShinyFemale",
                frontDefault: "frontDefault",
                frontFemale: "frontFemale",
                frontShiny: "frontShiny",
                frontShinyFemale: "frontShinyFemale"
            };
            let spriteSet1 = new SpriteSet(spriteSetData);
            let spriteSet2 = new SpriteSet(spriteSetData);
            expect(spriteSet1.equals(spriteSet2)).to.be.true;
        });
    });
});