
export interface IExceptionHandler {
    /** Handle exception */
    Handle(exception: Error): void;
}