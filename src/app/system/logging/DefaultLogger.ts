import { ILogger } from './ILogger';

declare var log4js: any;

export class DefaultLogger implements ILogger{
    constructor(private log4Logger:any){

    }

    /** Log to Debug level */
    Debug(message:any):ILogger{
        this.log4Logger.debug(message);
        return this;
    }
    /** Log to Trace level */
    Trace(message:any):ILogger{
        this.log4Logger.trace(message);
        return this;
    }
    /** Log to Info level */
    Info(message:any):ILogger{
        this.log4Logger.info(message);
        return this;
    }
    /** Log to Warn level */
    Warn(message:any):ILogger{
        this.log4Logger.warn(message);
        return this;
    }
    /** Log to Error level */
    Error(message:any):ILogger{
        this.log4Logger.error(message);
        return this;
    }
    /** Log to Fatal level */
    Fatal(message:any):ILogger{
        this.log4Logger.fatal(message);
        return this;
    }
}