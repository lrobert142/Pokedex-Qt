namespace Exception {

    export class NameNotFoundException extends Error {
        constructor(public message?: string) {
            super(message);
            this.name = "NameNotFoundException";
            this.stack = (<any>new Error()).stack;
        }
    }

}