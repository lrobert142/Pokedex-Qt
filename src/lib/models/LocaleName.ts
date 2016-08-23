namespace Model {

    /**
     * Class representing a localed name with a language code
     * 
     * @export
     * @class LocaleName
     * @implements {Interface.ILocaleName}
     * @implements {Interface.IJSONable}
     * @implements {Interface.IComparable}
    */
    export class LocaleName implements Interface.ILocaleName, Interface.IJSONable, Interface.IComparable {

        /**
         * Actual name value
         * 
         * @private
         * @type {string}
        */
        private _name: string;

        /**
         * Language locale code
         * 
         * @private
         * @type {string}
        */
        private _languageCode: string;

        /**
         * Schema validator for this model
         * 
         * @private
         * @type {ModelSchema}
        */
        protected _schema: ModelSchema = new ModelSchema({
            name: String,
            languageCode: String,
        });

        constructor(data: Object) {
            if (this._schema.validate(data)) {
                this._name = data.name;
                this._languageCode = data.languageCode;
            }
        }

        /**
         * Gets the actual name
         * 
         * @returns {string} The actual name value
        */
        name(): string {
            return this._name;
        }

        /**
         * Gets the language locale
         * 
         * @returns {string} The language locale code
        */
        languageCode(): string {
            return this._languageCode;
        }

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object {
            return {
                name: this._name, languageCode: this._languageCode
            };
        }

        /**
         * Checks whether this instance is equal to another
         * 
         * @param {ILocaleName} comparator The instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: Interface.ILocaleName): boolean {
            return this._name === comparator.name() && this._languageCode === comparator.languageCode()
        }
    }

}