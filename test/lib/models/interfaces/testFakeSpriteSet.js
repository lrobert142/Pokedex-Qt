const chai = require('chai');
const expect = chai.expect;
const FakePokemonSprites = require("../../../../build/lib.js").Interface.FakeSpriteSet;

describe("FakePokemonSprites", () => {
    describe("#backDefault", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.backDefault()).to.equal("http://www.fake.com/backDefault")
        });
    });

    describe("#backFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.backFemale()).to.equal("http://www.fake.com/backFemale")
        });
    });

    describe("#backShiny", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.backShiny()).to.equal("http://www.fake.com/backShiny")
        });
    });

    describe("#backShinyFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.backShinyFemale()).to.equal("http://www.fake.com/backShinyFemale")
        });
    });

    describe("#frontDefault", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.frontDefault()).to.equal("http://www.fake.com/frontDefault")
        });
    });

    describe("#frontFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.frontFemale()).to.equal("http://www.fake.com/frontFemale")
        });
    });

    describe("#frontShiny", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.frontShiny()).to.equal("http://www.fake.com/frontShiny")
        });
    });

    describe("#frontShinyFemale", () => {
        it("Should return the static value", () => {
            let fake = new FakePokemonSprites();
            expect(fake.frontShinyFemale()).to.equal("http://www.fake.com/frontShinyFemale")
        });
    });

});