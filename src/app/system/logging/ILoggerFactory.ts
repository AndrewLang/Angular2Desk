import {ILogger}    from './ILogger';

export interface ILoggerFactory{
    /** Create a logger */
    CreateLogger(name:string):ILogger;
}