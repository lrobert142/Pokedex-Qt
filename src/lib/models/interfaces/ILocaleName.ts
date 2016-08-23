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
    }

    export class FakeLocaleName {
        constructor() { }

        name(languageCode: string = "en"): string {
            return "Name";
        }

        languageCode(): string {
            return "en";
        }
    }

}