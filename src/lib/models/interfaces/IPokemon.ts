namespace Interface {

    /**
     * Interface representing basic Pokemon functionality
     * 
     * @export
     * @interface IPokemon
    */
    export interface IPokemon {
        /**
         * Gets the national pokedex number of the pokemon
         * 
         * @returns {string} National pokedex number
        */
        nationalDexNumber(): string;

        /**
         * Gets all names of the pokemon in various languages
         * 
         * @returns {Array<ILocaleName>} All names for the pokemon
        */
        names(): Array<ILocaleName>;

        /**
         * Gets the name of the pokemon in the specified language
         * 
         * @param {string} [languageCode] Two letter code of the language of the pokemon's name
         * @returns {string} The pokemon's name in the specified langauge locale
         * @throws {NameNotFoundException} If a name cannot be found, or the language code doesn't exist
        */
        name(languageCode?: string): string;

        /**
         * Gets all sprites for the pokemon
         * 
         * @returns {ISpriteSet} All available sprites
        */
        sprites(): ISpriteSet;

        /**
         * Gets the raw height of the pokemon
         * 
         * @returns {number}
        */
        height(): number;

        /**
         * Gets the height of the pokemon in meters
         * 
         * @returns {number} Height of the pokemon in meters
        */
        heightInMeters(): number;

        /**
         * Gets the raw weight of the pokemon
         *  
         * @returns {number}
        */
        weight(): number;

        /**
         * Gets the weight of the pokemon in kilograms
         * 
         * @returns {number} Weight of the pokemon in kilograms
        */
        weightInKg(): number;

        /**
         * Gets all stats of the pokemon
         * 
         * @returns {Array<IStat>} All available stats
        */
        stats(): Array<IStat>;

        /**
         * Gets the stat with the specified name
         * 
         * @param {string} statName The name of the stat to retrieve
         * @returns {IStat} Found stat object
         * @throws {StatNotFoundException} If a stat cannot be found with that name
        */
        stat(statName: string): IStat;

        /**
         * Gets the effort values earned by defeating this type of pokemon
         * 
         * @returns {Array<Object>} All found effort values
        */
        evWorth(): Array<Object>;

        /**
         * Gets all egg groups this pokemon belongs to
         * 
         * @returns {Array<String>} All egg groups this pokemon belongs to
        */
        eggGroups(): Array<String>;

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object;

        /**
         * Checks whether this Pokemon instance is equal to another
         * 
         * @param {IPokemon} comparator The IPokemon instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: IPokemon): boolean;
    }

    export class FakePokemon implements IPokemon {
        constructor() { }

        nationalDexNumber(): string {
            return "-001";
        }

        names(): Array<ILocaleName> {
            return [new Model.LocaleName({ name: "Fake", languageCode: "en" }), new Model.LocaleName({ name: "Pokemon", languageCode: "en" })];
        }

        name(languageCode: string = "en"): string {
            if (languageCode === "en") {
                return "FakePokemon";
            } else {
                throw new Exception.NameNotFoundException(`Name for language code "${languageCode}" not found.`);
            }
        }

        sprites(): ISpriteSet {
            return new FakeSpriteSet();
        }

        height(): number {
            return -1;
        }

        heightInMeters(): number {
            return -1;
        }

        weight(): number {
            return -1;
        }

        weightInKg(): number {
            return -1;
        }

        stats(): Array<IStat> {
            return [new FakeStat()];
        }

        stat(statName: string): IStat {
            if (statName === "attack") {
                return new FakeStat();
            } else {
                throw new Exception.StatNotFoundException(`Stat with name "${statName}" not found.`);
            }
        }

        evWorth(): Array<Object> {
            return [{ "attack": -1 }, { "defense": -1 }];
        }

        eggGroups(): Array<String> {
            return ["FakeEggGroup1", "FakeEggGroup2"];
        }

        toJSON(): Object {
            return {
                nationalDexNumber: "001", names: [{ name: "Fake", languageCode: "en" }, { name: "Pokemon", languageCode: "en" }],
                sprites: new FakeSpriteSet().toJSON(), height: -1, weight: -1, stats: [new FakeStat().toJSON()],
                eggGroups: ["FakeEggGroup1", "FakeEggGroup2"]
            };
        }

        equals(comparator: IPokemon): boolean {
            return true;
        }
    }

}