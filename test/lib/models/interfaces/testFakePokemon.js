const chai = require('chai');
const expect = chai.expect;
const FakePokemon = require("../../../../build/lib.js").Interface.FakePokemon;
const NameNotFoundException = require("../../../../build/lib.js").Exception.NameNotFoundException;
const StatNotFoundException = require("../../../../build/lib.js").Exception.StatNotFoundException;

describe("FakePokemon", () => {
    describe("#nationalDexNumber", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.nationalDexNumber()).to.equal("-001");
        });
    });

    describe("#name", () => {
        it("Should throw an exception if languageCode !== en", () => {
            let fake = new FakePokemon();
            expect(() => {
                fake.name("ja");
            }).to.throw(NameNotFoundException, "Name for language code \"ja\" not found.")
        });

        it("Should return a static value is languageCode === en", () => {
            let fake = new FakePokemon();
            expect(fake.name("en")).to.equal("FakePokemon");
        });

        it("Should return a static value if languageCode is not specified", () => {
            let fake = new FakePokemon();
            expect(fake.name()).to.equal("FakePokemon");
        });
    });

    describe("#names", () => {
        it("Should return a static array", () => {
            let fake = new FakePokemon();
            let names = fake.names();
            expect(names.length).to.equal(2);
            expect(names[0].toJSON()).to.deep.equal({ name: "Fake", languageCode: "en" });
            expect(names[1].toJSON()).to.deep.equal({ name: "Pokemon", languageCode: "en" });
        });
    });

    describe("#sprites", () => {
        it("Should return a static object", () => {
            let fake = new FakePokemon();
            let sprites = fake.sprites();
            expect(sprites.backDefault()).to.equal("http://www.fake.com/backDefault");
            expect(sprites.backFemale()).to.equal("http://www.fake.com/backFemale");
            expect(sprites.backShiny()).to.equal("http://www.fake.com/backShiny");
            expect(sprites.backShinyFemale()).to.equal("http://www.fake.com/backShinyFemale");
            expect(sprites.frontDefault()).to.equal("http://www.fake.com/frontDefault");
            expect(sprites.frontFemale()).to.equal("http://www.fake.com/frontFemale");
            expect(sprites.frontShiny()).to.equal("http://www.fake.com/frontShiny");
            expect(sprites.frontShinyFemale()).to.equal("http://www.fake.com/frontShinyFemale");
        });
    });

    describe("#height", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.height()).to.equal(-1)
        });
    });

    describe("#heightInMeters", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.heightInMeters()).to.equal(-1)
        });
    });

    describe("#weight", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.weight()).to.equal(-1)
        });
    });

    describe("#weightInKg", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.weightInKg()).to.equal(-1)
        });
    });

    describe("#stats", () => {
        it("should return a static array with static data", () => {
            let fake = new FakePokemon();
            let stat = fake.stats()[0];
            expect(stat.name()).to.equal("FakeStat");
            expect(stat.effortValue()).to.equal(-1);
            expect(stat.baseValue()).to.equal(-1);
        })
    });

    describe("#stat", () => {
        it("Should throw an exception if statName !== attack", () => {
            let fake = new FakePokemon();
            expect(() => {
                fake.stat("defense");
            }).to.throw(StatNotFoundException, "Stat with name \"defense\" not found.");
        });

        it("Should return a static value", () => {
            let fake = new FakePokemon();
            let stat = fake.stat("attack");
            expect(stat.name()).to.equal("FakeStat");
            expect(stat.effortValue()).to.equal(-1);
            expect(stat.baseValue()).to.equal(-1);
        });
    });

    describe("#evWorth", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.evWorth()).to.deep.equal([{ "attack": -1 }, { "defense": -1 }])
        });
    });

    describe("#eggGroups", () => {
        it("Should return a static value", () => {
            let fake = new FakePokemon();
            expect(fake.eggGroups()).to.deep.equal(["FakeEggGroup1", "FakeEggGroup2"])
        });
    });

    describe("#toJSON", () => {
        it("Should return a serialised object", () => {
            let fake = new FakePokemon();
            expect(fake.toJSON()).to.deep.equal({
                nationalDexNumber: "001", names: [{ name: "Fake", languageCode: "en" }, { name: "Pokemon", languageCode: "en" }],
                sprites: {
                    backDefault: "http://www.fake.com/backDefault", backFemale: "http://www.fake.com/backFemale",
                    backShiny: "http://www.fake.com/backShiny", backShinyFemale: "http://www.fake.com/backShinyFemale",
                    frontDefault: "http://www.fake.com/frontDefault", frontFemale: "http://www.fake.com/frontFemale",
                    frontShiny: "http://www.fake.com/frontShiny", frontShinyFemale: "http://www.fake.com/frontShinyFemale"
                }, height: -1, weight: -1, stats: [{ name: "FakeStat", effortValue: -1, baseValue: -1 }],
                eggGroups: ["FakeEggGroup1", "FakeEggGroup2"]
            });
        });
    });

    describe("#equals", () => {
        it("Should return true", () => {
            let fake = new FakePokemon();
            expect(fake.equals(fake)).to.equal(true);
        });
    });

});