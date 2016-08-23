namespace Interface {

    /**
     * Interface representing the minimum required functionality to check if several instance are comparable
     * 
     * @export
     * @interface IComparable
    */
    export interface IComparable {
        /**
         * Checks whether this instance is equal to another
         * 
         * @param {*} comparator The instance to compare with
         * @returns {boolean} True if objects are equal, false otherwise
        */
        equals(comparator: any): boolean;
    }

    export class FakeComparable {
        constructor() { }

        equals(comparator: any): boolean {
            return comparator instanceof FakeComparable;
        }
    }

}