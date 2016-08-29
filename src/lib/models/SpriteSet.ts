namespace Model {

    /**
     * Class representing various sprites a pokemon may have
     * 
     * @export
     * @class PokemonSprite
     * @implements {Interface.IPokemonSprites}
    */
    export class SpriteSet implements Interface.ISpriteSet {
        /**
         * Default back sprite
         * 
         * @private
         * @type {string}
        */
        private _backDefault: string;

        /**
         * Female, back sprite
         * 
         * @private
         * @type {string}
        */
        private _backFemale: string;

        /**
         * Shiny, back sprite
         * 
         * @private
         * @type {string}
        */
        private _backShiny: string;

        /**
         * Shiny, female, back sprite
         * 
         * @private
         * @type {string}
        */
        private _backShinyFemale: string;

        /**
         * Default front sprite
         * 
         * @private
         * @type {string}
        */
        private _frontDefault: string;

        /**
         * Female, front sprite
         * 
         * @private
         * @type {string}
        */
        private _frontFemale: string;

        /**
         * Shiny, front sprite
         * 
         * @private
         * @type {string}
        */
        private _frontShiny: string;

        /**
         * Shiny, female, front sprite
         * 
         * @private
         * @type {string}
        */
        private _frontShinyFemale: string;

        /**
         * Schema validator for this model
         * 
         * @private
         * @type {ModelSchema}
        */
        protected _schema: ModelSchema = new ModelSchema({
            backDefault: String,
            backFemale: String,
            backShiny: String,
            backShinyFemale: String,
            frontDefault: String,
            frontFemale: String,
            frontShiny: String,
            frontShinyFemale: String
        });

        /**
         * Creates an instance of PokemonSprite.
         * 
         * @param {Object} data Object containing all sprite data
         * @param {string} data.backDefault Default, back sprite
         * @param {string} data.backFemale Female, back sprite
         * @param {string} data.backShiny Shiny, back sprite
         * @param {string} data.backShinyFemale Shiny, female, back sprite
         * @param {string} data.frontDefault Default, front sprite
         * @param {string} data.frontFemale Female, front sprite
         * @param {string} data.frontShiny Shiny, front sprite
         * @param {string} data.frontShinyFemale Shiny, female, front sprite
        */
        constructor(data: Object) {
            if (this._schema.validate(data)) {
                this._backDefault = data.backDefault;
                this._backFemale = data.backFemale;
                this._backShiny = data.backShiny;
                this._backShinyFemale = data.backShinyFemale;
                this._frontDefault = data.frontDefault;
                this._frontFemale = data.frontFemale;
                this._frontShiny = data.frontShiny;
                this._frontShinyFemale = data.frontShinyFemale;
            }
        }

        /**
         * Gets the back view of the default sprite
         * 
         * @returns {string}
        */
        backDefault(): string {
            return this._backDefault;
        }

        /**
         * Gets the back view of a female sprite
         * 
         * @returns {string}
        */
        backFemale(): string {
            return this._backFemale;
        }

        /**
         * Gets the back view of the shiny sprite
         * 
         * @returns {string}
        */
        backShiny(): string {
            return this._backShiny;
        }

        /**
         * Gets the back view of the shiny, female sprite
         * 
         * @returns {string}
        */
        backShinyFemale(): string {
            return this._backShinyFemale;
        }

        /**
         * Gets the front view of the default sprite
         * 
         * @returns {string}
        */
        frontDefault(): string {
            return this._frontDefault;
        }

        /**
         * Gets the front view of a female sprite
         * 
         * @returns {string}
        */
        frontFemale(): string {
            return this._frontFemale;
        }

        /**
         * Gets the front view of the shiny sprite
         * 
         * @returns {string}
        */
        frontShiny(): string {
            return this._frontShiny;
        }

        /**
         * Gets the front view of the shiny, female sprite
         * 
         * @returns {string}
        */
        frontShinyFemale(): string {
            return this._frontShinyFemale;
        }

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object {
            return {
                backDefault: this._backDefault, backFemale: this._backFemale,
                backShiny: this._backShiny, backShinyFemale: this._backShinyFemale,
                frontDefault: this._frontDefault, frontFemale: this._frontFemale,
                frontShiny: this._frontShiny, frontShinyFemale: this._frontShinyFemale
            };
        }

        /**
         * Checks whether this instance is equal to another
         * 
         * @param {Interface.ISpriteSet} comparator The instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: Interface.ISpriteSet): boolean {
            return this._backDefault === comparator.backDefault()
                && this._backFemale === comparator.backFemale()
                && this._backShiny === comparator.backShiny()
                && this._backShinyFemale === comparator.backShinyFemale()
                && this._frontDefault === comparator.frontDefault()
                && this._frontFemale === comparator.frontFemale()
                && this._frontShiny === comparator.frontShiny()
                && this._frontShinyFemale === comparator.frontShinyFemale();
        }
    }
}