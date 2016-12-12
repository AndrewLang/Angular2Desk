
export interface ILogger{
    /** Log to Debug level */
    Debug(message:any):ILogger;
    /** Log to Trace level */
    Trace(message:any):ILogger;
    /** Log to Info level */
    Info(message:any):ILogger;
    /** Log to Warn level */
    Warn(message:any):ILogger;
    /** Log to Error level */
    Error(message:any):ILogger;
    /** Log to Fatal level */
    Fatal(message:any):ILogger;
}