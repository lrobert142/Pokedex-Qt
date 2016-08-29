namespace Interface {

    /**
     * Interface representing minimum functionality stat (including stat metadata)
     * 
     * @export
     * @interface IStat
    */
    export interface IStat {
        /**
         * Name of the stat
         * 
         * @returns {string}
        */
        name(): string;

        /**
         * Effort value (EV) associated with this stat
         * 
         * @returns {number}
        */
        effortValue(): number;

        /**
         * Base stat value
         * 
         * @returns {number}
        */
        baseValue(): number;

        /**
         * Seralizes to a plain JSON representation
         * 
         * @returns {Object} Seralized object
        */
        toJSON(): Object;

        /**
         * Checks whether this instance is equal to another
         * 
         * @param {IStat} comparator The instance to compare with
         * @returns {boolean} True if object's propeties are identical, false otherwise
        */
        equals(comparator: IStat): boolean;
    }

    export class FakeStat implements IStat {
        constructor() { }

        name(): string {
            return "FakeStat";
        }

        effortValue(): number {
            return -1;
        }

        baseValue(): number {
            return -1;
        }

        toJSON(): Object {
            return { name: "FakeStat", effortValue: -1, baseValue: -1 };
        }

        equals(comparator: IStat): boolean {
            return true;
        }
    }
}