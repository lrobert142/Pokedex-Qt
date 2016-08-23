namespace Interface {

    /**
     * Interface representing required functionality of a name with a defined language locale
     * 
     * @export
     * @interface ILocaleName
    */
    export interface ILocaleName {
        /**
         * Gets the actual name
         * 
         * @returns {string} The actual name value
        */
        name(): string;

        /**
         * Gets the language locale as a two character code
         * 
         * @returns {string} The language locale code
        */
        languageCode(): string;

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object;

        /**
         * Checks whether this instance is equal to another
         * 
         * @param {ILocaleName} comparator The instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: ILocaleName): boolean;
    }

    export class FakeLocaleName {
        constructor() { }

        name(languageCode: string = "en"): string {
            return "Name";
        }

        languageCode(): string {
            return "en";
        }

        toJSON(): Object {
            return { name: "Name", languageCode: "en" };
        }

        equals(comparator: ILocaleName): boolean {
            return true;
        }
    }

}