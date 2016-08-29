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

        //TODO toJSON, equals
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
    }
}