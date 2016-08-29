const chai = require('chai');
const expect = chai.expect;
const Pokemon = require("../../../build/lib.js").Model.Pokemon;
const ModelValidationException = require("../../../build/lib.js").Exception.ModelValidationException;
const NameNotFoundException = require("../../../build/lib.js").Exception.NameNotFoundException;
const StatNotFoundException = require("../../../build/lib.js").Exception.StatNotFoundException;


describe("Pokemon", () => {
    const validPokemonData = {
        nationalDexNumber: "001",
        names: [{ name: "UnitTest", languageCode: "en" }],
        sprites: {
            backDefault: "http://www.fake.com/backDefault",
            backFemale: "http://www.fake.com/backFemale",
            backShiny: "http://www.fake.com/backShiny",
            backShinyFemale: "http://www.fake.com/backShinyFemale",
            frontDefault: "http://www.fake.com/frontDefault",
            frontFemale: "http://www.fake.com/frontFemale",
            frontShiny: "http://www.fake.com/frontShiny",
            frontShinyFemale: "http://www.fake.com/frontShinyFemale"
        },
        height: 1,
        weight: 2,
        stats: [
            {
                "name": "speed",
                "effortValue": 0,
                "baseValue": 5
            },
            {
                "name": "special-defense",
                "effortValue": 1,
                "baseValue": 6
            },
            {
                "name": "special-attack",
                "effortValue": 2,
                "baseValue": 7
            },
            {
                "name": "defense",
                "effortValue": 3,
                "baseValue": 8
            },
            {
                "name": "attack",
                "effortValue": 4,
                "baseValue": 9
            },
            {
                "name": "hp",
                "effortValue": 5,
                "baseValue": 10
            }
        ],
        eggGroups: []
    };

    describe("Constructor", () => {
        it("Should throw an error if any data is missing", () => {
            expect(() => {
                let pokemon = new Pokemon({});
            }).to.throw(ModelValidationException, "nationalDexNumber,names,sprites,height,weight,stats,eggGroups field(s) missing.");
        });

        it("Should throw an error if any data is of the wrong type", () => {
            expect(() => {
                let pokemon = new Pokemon({
                    nationalDexNumber: 1,
                    names: [],
                    sprites: [],
                    height: 1,
                    weight: 1,
                    stats: [],
                    eggGroups: []
                });
            }).to.throw(ModelValidationException, 'Value "nationalDexNumber" of type "number" does not match schema type "string"');
        });

        it("Should create a new instance of Pokemon", () => {
            let pokemon = new Pokemon(validPokemonData);

            expect(pokemon.nationalDexNumber()).to.equal("001");
            expect(pokemon.names().length).to.deep.equal(1);
            expect(pokemon.sprites()).to.not.equal(undefined);
            expect(pokemon.height()).to.equal(1);
            expect(pokemon.weight()).to.equal(2);
            expect(pokemon.stats().length).to.equal(6);
            expect(pokemon.eggGroups()).to.deep.equal([]);
        });
    });

    describe("#nationalDexNumber", () => {
        it("Should return the given national pokedex number", () => {
            let pokemon = new Pokemon(validPokemonData);

            expect(pokemon.nationalDexNumber()).to.equal("001");
        });
    });

    describe("#names", () => {
        it("Should return an all names", () => {
            let pokemon = new Pokemon(validPokemonData);
            let names = pokemon.names();

            expect(names.length).to.equal(1);
            expect(names[0].toJSON()).to.deep.equal({ name: "UnitTest", languageCode: "en" })
        });
    });

    describe("#name", () => {
        it("Should throw an exception if a name with the given language code cannot be found", () => {
            let pokemon = new Pokemon(validPokemonData);

            expect(() => {
                pokemon.name("ja");
            }).to.throw(NameNotFoundException, 'Name for language code "ja" not found.');
        });

        it("Should return the name with the 'en' languageCode if param is not specified", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.name()).to.equal("UnitTest");
        });

        it("Should return the name with the given languageCode", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.name("en")).to.equal("UnitTest");
        });
    });

    describe("#sprites", () => {
        it("Should return a valid SpiteSet object", () => {
            let pokemon = new Pokemon(validPokemonData);
            let sprites = pokemon.sprites();
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
        it("Should return the raw height value", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.height()).to.equal(1);
        });
    });

    describe("#heightInMeters", () => {
        it("Should return the height in meters", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.heightInMeters()).to.equal(0.1);
        });
    });

    describe("#weight", () => {
        it("Should return the raw weight value", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.weight()).to.equal(2);
        });
    });

    describe("#weightInKg", () => {
        it("Should return the weight in kilograms", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(pokemon.weightInKg()).to.equal(0.2);
        });
    });

    describe("#stats", () => {
        it("Should return an array of stat objects", () => {
            let pokemon = new Pokemon(validPokemonData);
            let stats = pokemon.stats();
            expect(stats.length).to.equal(6);
            expect(stats[0].toJSON()).to.deep.equal({
                "name": "speed",
                "effortValue": 0,
                "baseValue": 5
            });
            expect(stats[1].toJSON()).to.deep.equal({
                "name": "special-defense",
                "effortValue": 1,
                "baseValue": 6
            });
            expect(stats[2].toJSON()).to.deep.equal({
                "name": "special-attack",
                "effortValue": 2,
                "baseValue": 7
            });
            expect(stats[3].toJSON()).to.deep.equal({
                "name": "defense",
                "effortValue": 3,
                "baseValue": 8
            });
            expect(stats[4].toJSON()).to.deep.equal({
                "name": "attack",
                "effortValue": 4,
                "baseValue": 9
            });
            expect(stats[5].toJSON()).to.deep.equal({
                "name": "hp",
                "effortValue": 5,
                "baseValue": 10
            });
        });
    });

    describe("#stat", () => {
        it("Should throw an error if a stat with the specified name cannot be found", () => {
            let pokemon = new Pokemon(validPokemonData);
            expect(() => {
                let stat = pokemon.stat("invalid-name");
            }).to.throw(StatNotFoundException, 'Stat with name "invalid-name" not found.')
        });

        it("Should return the stat object with the given name", () => {
            let pokemon = new Pokemon(validPokemonData);
            let stat = pokemon.stat("attack");
            expect(stat.name()).to.equal("attack");
            expect(stat.effortValue()).to.equal(4);
            expect(stat.baseValue()).to.equal(9);
        });
    });

});