namespace Interface {

    /**
     * Interface representing minimum required functionality to convert data to JSON structure
     * 
     * @export
     * @interface IJSONable
    */
    export interface IJSONable {
        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object;
    }

    export class FakeJSONable {
        constructor() { }

        toJSON(): Object {
            return { foo: "bar" }
        }
    }

}