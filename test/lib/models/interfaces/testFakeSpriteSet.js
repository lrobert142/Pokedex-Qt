const chai = require('chai');
const expect = chai.expect;
const FakeSpriteSet = require("../../../../build/lib.js").Interface.FakeSpriteSet;

describe("FakeSpriteSet", () => {
    describe("#backDefault", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.backDefault()).to.equal("http://www.fake.com/backDefault")
        });
    });

    describe("#backFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.backFemale()).to.equal("http://www.fake.com/backFemale")
        });
    });

    describe("#backShiny", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.backShiny()).to.equal("http://www.fake.com/backShiny")
        });
    });

    describe("#backShinyFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.backShinyFemale()).to.equal("http://www.fake.com/backShinyFemale")
        });
    });

    describe("#frontDefault", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.frontDefault()).to.equal("http://www.fake.com/frontDefault")
        });
    });

    describe("#frontFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.frontFemale()).to.equal("http://www.fake.com/frontFemale")
        });
    });

    describe("#frontShiny", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.frontShiny()).to.equal("http://www.fake.com/frontShiny")
        });
    });

    describe("#frontShinyFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakeSpriteSet();
            expect(fake.frontShinyFemale()).to.equal("http://www.fake.com/frontShinyFemale")
        });
    });

    describe("#toJSON", () => {
        it("Should return static JSON", () => {
            let fake = new FakeSpriteSet();
            expect(fake.toJSON()).to.deep.equal({
                backDefault: "http://www.fake.com/backDefault", backFemale: "http://www.fake.com/backFemale",
                backShiny: "http://www.fake.com/backShiny", backShinyFemale: "http://www.fake.com/backShinyFemale",
                frontDefault: "http://www.fake.com/frontDefault", frontFemale: "http://www.fake.com/frontFemale",
                frontShiny: "http://www.fake.com/frontShiny", frontShinyFemale: "http://www.fake.com/frontShinyFemale"
            });
        });
    });

    describe("#equals", () => {
        it("Should return true", () => {
            let fake = new FakeSpriteSet();
            expect(fake.equals(fake)).to.be.true;
        })
    });

});