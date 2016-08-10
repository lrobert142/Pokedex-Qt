namespace Models {
    /**
     * Model which represents a typical (valid) email address
     * 
     * @export
     * @class Email
     */
    export class Email {

        /**
         * Email address
         * 
         * @private
         * @type {string}
         */
        private _email: string;

        /**
         * Email address validation expression to check compliance with RFC 5322
         * 
         * @private
         * @static
         * @type {RegExp}
         */
        private static VALIDATION: RegExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        /**
         * Creates an instance of a valid Email.
         * 
         * @param {string} email Email address
         * @throws {TypeError} Email is not valid with RFC 5322
         */
        constructor(email: string) {
            var valid = Email.VALIDATION.test(email);
            if (!valid) {
                throw new TypeError("Invalid email address. [RFC 5322]");
            }
            this._email = email.toLowerCase();
        }

        /**
         * Gets the email address
         * 
         * @returns {string}  Email address
         */
        get(): string {
            return this._email;
        }

        /**
         * Compares an email address against another instance
         * 
         * @param {Email} compatator Email address to compare against
         * @returns {boolean} True if identical
         */
        equals(compatator: Email): boolean;

        /**
         * Compares an email address against a string
         * 
         * @param {string} compatator String to compare against
         * @returns {boolean} True if identical
         */
        equals(email: string): boolean;

        equals(compatator: any): boolean {
            if (compatator && typeof compatator == "string") {
                //String Comparison
                return this._email === compatator;

            } else {
                //Model Comparison
                return this._email === compatator.get();
            }
        }

        /**
         * Seralizes the email to a plain JSON representation
         * 
         * @returns {object} Seralized email object
         */
        toJSON() {
            return this._email;
        }
    }
}