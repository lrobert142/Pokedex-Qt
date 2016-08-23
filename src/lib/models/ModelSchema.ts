namespace Model {
    /**
     * Model representing a 'validation-type', data-set schema
     * 
     * @export
     * @class ModelSchema
     * @implements {ISchema}
    */
    export class ModelSchema implements Interface.ISchema {
        private _schema: Object;

        /**
         * Creates an instance of ModelSchema. 
         * 
         * @param {Object} schema
         */
        constructor(schema: Object) {
            this._schema = schema;
        }

        /**
         * Gets the schema objects will be tested against
         * 
         * @returns {Object} The schema objects should follow
        */
        schema(): Object {
            return this._schema;
        }

        /**
         * Validates the object against the schema
         * 
         * @param {Object} objectToTest The object to be validated
         * @returns {boolean} True if objectToTest matches the schema
         */
        validate(objectToTest: Object): boolean {
            return this._validate(objectToTest, this._schema);
        }

        /**
         * Ensures the object contains all properties required by the schema and that each value is of the correct type 
         * 
         * @param {Object} obj Object containing params to be validated
         * @param {Object} [schema = this._schema] Schema to compare object properties against
         * @returns {boolean} True if the object matches the schema
         * @throws {ModelValidationError} If the object properties are missing or do not match the criteria
         */
        private _validate(obj: Object, schema: Object): boolean {
            const missingProperties = _.difference(_.keys(schema), _.keys(obj));
            if (missingProperties.length > 0) {
                throw new Exception.ModelValidationException(missingProperties.join() + " field(s) missing.");
            } else {
                return this._validateValueTypes(obj, schema);
            }
        }

        /**
         * Ensures the types of the object's values match the types in the schema
         * 
         * @private
         * @param {Object} obj Object containing properties to be checked
         * @param {Object} schema Schema to compare object properties against
         * @returns {boolean} True if properties' types match the schema's
         * @throws {Error} If the properties' types do not match the schema's
         */
        private _validateValueTypes(obj: any, schema: any): boolean {
            _.keys(schema).forEach((key: string) => {
                let objValue = obj[key];
                let schemaValue = schema[key];

                if (typeof schemaValue === "object") {
                    this._validate(objValue, schemaValue);
                } else {
                    if (typeof objValue !== typeof schemaValue()) {
                        throw new Exception.ModelValidationException("Value \"" + key + "\" of type \"" + typeof objValue
                            + "\" does not match schema type \"" + typeof schemaValue() + "\""
                        );
                    }
                }
            });

            return true;
        }

        /**
         * Compares an ISchema instance with another
         * 
         * @param {ISchema} comparator The ISchema instance to compare with
         * @returns {boolean} True if schema are identical
         */
        equals(comparator: Interface.ISchema): boolean {
            return _.isEqual(this._schema, comparator.schema());
        }

        /**
         * Seralizes the ISchema to a plain JSON representation
         * 
         * @returns {Object} Seralized ISchema object
         */
        toJSON(): Object {
            return { schema: this._schema };
        }
    }
}