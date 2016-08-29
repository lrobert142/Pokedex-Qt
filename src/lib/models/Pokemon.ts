namespace Model {

    /**
     * Class representing a Pokemon
     * 
     * @export
     * @class Pokemon
     * @implements {Interface.IPokemon}
    */
    export class Pokemon implements Interface.IPokemon {
        /**
         * Nation pokedex number
         * 
         * @private
         * @type {string}
        */
        private _nationalDexNumber: string;

        /**
         * Array of names of the pokemon in different languages
         * 
         * @private
         * @type {Array<Interface.ILocaleName>}
        */
        private _names: Array<Interface.ILocaleName>;

        /**
         * Set of sprites for the pokemon
         * 
         * @private
         * @type {Interface.ISpriteSet}
        */
        private _sprites: Interface.ISpriteSet;

        /**
         * Raw height value
         * 
         * @private
         * @type {number}
        */
        private _height: number;

        /**
         * Raw weight value
         * 
         * @private
         * @type {number}
        */
        private _weight: number;

        /**
         * Array of stats
         *  
         * @private
         * @type {Array<Interface.IStat>}
        */
        private _stats: Array<Interface.IStat>;

        /**
         * Array of possible egg groups
         * 
         * @private
         * @type {Array<Object>}
        */
        private _eggGroups: Array<Object>;

        /**
         * Schema validator for this model
         * 
         * @private
         * @type {ModelSchema}
        */
        protected _schema: ModelSchema = new ModelSchema({
            nationalDexNumber: String,
            names: Array,
            sprites: Array,
            height: Number,
            weight: Number,
            stats: Array,
            eggGroups: Array
        });

        /**
         * Creates an instance of Pokemon.
         * 
         * @param {Object} data Object containing all data relevant to the Pokemon
         * @param {number} data.nationalDexNumber Pokemon's national pokedex number
         * @param {Array} data.names Names and locales of the pokemon in different languages
         * @param {Object} data.sprites Various sprites of the pokemon
         * @param {number} data.height Raw height of the pokemon
         * @param {number} data.weight Raw weight of the pokemon
         * @param {Array} data.height Stats of the pokemon, including ev worth
         * @param {Array} data.eggGroups Egg groups the pokemon belongs to
        */
        constructor(data: Object) {
            if (this._schema.validate(data)) {
                let names: Array<Interface.ILocaleName> = [];
                let stats: Array<Interface.IStat> = [];

                data.names.forEach((nameData: Object) => {
                    names.push(new LocaleName(nameData));
                });

                data.stats.forEach((statData: Object) => {
                    stats.push(new Stat(statData));
                });

                this._nationalDexNumber = data.nationalDexNumber;
                this._names = names;
                this._sprites = new SpriteSet(data.sprites);
                this._height = data.height;
                this._weight = data.weight;
                this._stats = stats;
                this._eggGroups = data.eggGroups;
            }
        }

        /**
         * Gets the national pokedex number of the pokemon
         * 
         * @returns {string} National pokedex number
        */
        nationalDexNumber(): string {
            return this._nationalDexNumber;
        }

        /**
         * Gets all names of the pokemon in various languages
         * 
         * @returns {Array<Interface.ILocaleName>} All names for the pokemon
        */
        names(): Array<Interface.ILocaleName> {
            return this._names;
        }

        /**
         * Gets the name of the pokemon in the specified language
         * 
         * @param {string} [languageCode="en"] Code of the language of the pokemon's name
         * @returns {string} The pokemon's name in the specified langauge locale
         * @throws {NameNotFoundException} If a name cannot be found, or the language code doesn't exist
        */
        name(languageCode: string = "en"): string {
            for (let i = 0; i < this._names.length; i++) {
                if (this._names[i].languageCode() === languageCode) {
                    return this._names[i].name();
                }
            }

            throw new Exception.NameNotFoundException(`Name for language code "${languageCode}" not found.`);
        }

        /**
         * Gets all sprites for the pokemon
         * 
         * @returns {Interface.ISpriteSet} All available sprites
        */
        sprites(): Interface.ISpriteSet {
            return this._sprites;
        }

        /**
         * Gets the raw height of the pokemon
         * 
         * @returns {number}
        */
        height(): number {
            return this._height;
        }

        /**
         * Gets the height of the pokemon in meters
         * 
         * @returns {number} Height of the pokemon in meters
        */
        heightInMeters(): number {
            return this._height / 10;
        }

        /**
         * Gets the raw weight of the pokemon
         *  
         * @returns {number}
        */
        weight(): number {
            return this._weight;
        }

        /**
         * Gets the weight of the pokemon in kilograms
         * 
         * @returns {number} Weight of the pokemon in kilograms
        */
        weightInKg(): number {
            return this._weight / 10;
        }

        /**
         * Gets all stats of the pokemon
         * 
         * @returns {Array<Interface.IStat>} All available stats
        */
        stats(): Array<Interface.IStat> {
            return this._stats;
        }

        /**
         * Gets the stat with the specified name
         * 
         * @param {string} statName The name of the stat to retrieve
         * @returns {Interface.IStat} Value of the found stat
         * @throws {StatNotFoundException} If a stat cannot be found with that name
        */
        stat(statName: string): Interface.IStat {
            for (let i = 0; i < this._stats.length; i++) {
                let stat = this._stats[i];
                if (stat.name() === statName) {
                    return stat;
                }
            }

            throw new Exception.StatNotFoundException(`Stat with name "${statName}" not found.`);
        }

        /**
         * Gets the effort values earned by defeating this type of pokemon
         * 
         * @returns {Array<Object>} All found effort values
        */
        evWorth(): Array<Object> {
            let evs: any = [];
            for (let i = 0; i < this._stats.length; i++) {
                let stat = this._stats[i];
                if (stat.effortValue() > 0) {
                    let ev: any = {};
                    ev[stat.name()] = stat.effortValue();
                    evs.push(ev);
                }
            }

            return evs;
        }

        /**
         * Gets all egg groups this pokemon belongs to
         * 
         * @returns {Array<String>} All egg groups this pokemon belongs to
        */
        eggGroups(): Array<String> {
            let eggGroups: any = [];
            for (let i = 0; i < this._eggGroups.length; i++) {
                eggGroups.push(this._eggGroups[i].name);
            }

            return eggGroups;
        }

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object {
            return {
                nationalDexNumber: this._nationalDexNumber, names: this._names, sprites: this._sprites,
                height: this._height, weight: this._weight, stats: this._stats, eggGroups: this._eggGroups
            };
        }

        /**
         * Checks whether this Pokemon instance is equal to another
         * 
         * @param {Pokemon} comparator The Pokemon instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: Pokemon): boolean {
            return this._nationalDexNumber === comparator.nationalDexNumber()
                && _.isEqual(this._names, comparator.names())
                && _.isEqual(this._sprites, comparator.sprites())
                && this._height === comparator.height()
                && this._weight === comparator.weight()
                && _.isEqual(this._stats, comparator.stats())
                && _.isEqual(this._eggGroups, comparator.eggGroups());
        }
    }

}