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
        weight: 1,
        stats: [],
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
            expect(pokemon.names()[0].toJSON()).to.deep.equal({ name: "UnitTest", languageCode: "en" });
            expect(pokemon.height()).to.equal(1);
            expect(pokemon.weight()).to.equal(1);
            expect(pokemon.stats()).to.deep.equal([]);
            expect(pokemon.eggGroups()).to.deep.equal([]);

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