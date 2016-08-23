namespace Interface {
    /**
     * Interface for a schema object
     * 
     * @export
     * @interface ISchema
     */
    export interface ISchema {

        /**
         * Gets the object schema
         * 
         * @returns {Object} the object schema
         */
        schema(): Object;

        /**
         * Validates the object against the schema
         * 
         * @param {Object} objectToTest The object to be validated
         * @returns {boolean} True if testObject matches the schema
         */
        validate(objectToTest: Object): boolean;

        /**
         * Compares an ISchema instance with another
         * 
         * @param {ISchema} comparator The ISchema instance to compare with
         * @returns {boolean} True is instances are identical
         */
        equals(comparator: ISchema): boolean;

        /**
         * Seralizes the ISchema to a plain JSON representation
         * 
         * @returns {Object} Seralized ISchema object
         */
        toJSON(): Object;
    }
}