namespace Exception {

    export class StatNotFoundException extends Error {
        constructor(public message?: string) {
            super(message);
            this.name = "StatNotFoundException";
            this.stack = (<any>new Error()).stack;
        }
    }

}