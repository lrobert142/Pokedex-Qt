namespace Exception {

    export class ModelValidationException extends Error {
        constructor(public message?: string) {
            super(message);
            this.name = "ModelValidationException";
            this.stack = (<any>new Error()).stack;
        }
    }

}