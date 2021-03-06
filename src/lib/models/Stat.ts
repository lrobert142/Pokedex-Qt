namespace Model {

    /**
     * Class representing a stat (with stat metadata)
     * 
     * @export
     * @class Stat
    */
    export class Stat implements Interface.IStat {
        /**
         * Name of the stat
         * 
         * @private
         * @type {string}
        */
        private _name: string;

        /**
         * Effort value (EV) associated with this stat
         * 
         * @private
         * @type {number}
        */
        private _effortValue: number;

        /**
         * Base value of the stat
         * 
         * @private
         * @type {number}
        */
        private _baseValue: number;

        /**
         * Schema validator for this model
         * 
         * @private
         * @type {ModelSchema}
        */
        protected _schema: ModelSchema = new ModelSchema({
            name: String,
            effortValue: Number,
            baseValue: Number
        });

        /**
         * Creates an instance of Stat.
         *  
         * @param {Object} data Object containing all data relevant to the stat
         * @param {string} data.name Name of the stat
         * @param {number} data.effortValue Effort value associated with the stat
         * @param {number} data.baseValue Base value of the stat
        */
        constructor(data: Object) {
            if (this._schema.validate(data)) {
                this._name = data.name;
                this._effortValue = data.effortValue;
                this._baseValue = data.baseValue;
            }
        }

        /**
         * Name of the stat
         * 
         * @returns {string}
        */
        name(): string {
            return this._name;
        }

        /**
         * Effort value (EV) associated with this stat
         * 
         * @returns {number}
        */
        effortValue(): number {
            return this._effortValue;
        }

        /**
         * Base stat value
         * 
         * @returns {number}
        */
        baseValue(): number {
            return this._baseValue;
        }

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object {
            return { name: this._name, effortValue: this._effortValue, baseValue: this._baseValue };
        }

        /**
         * Checks whether this instance is equal to another
         * 
         * @param {Interface.IStat} comparator The instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: Interface.IStat): boolean {
            return this._name === comparator.name()
                && this._effortValue === comparator.effortValue()
                && this._baseValue === comparator.baseValue();
        }
    }
}