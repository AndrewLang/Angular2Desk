import { Injectable } from '@angular/core';
import { ILoggerFactory } from './ILoggerFactory';
import { ILogger } from './ILogger';
import { DefaultLogger } from './DefaultLogger';

declare var log4js: any;

@Injectable()
export class DefaultLoggerFactory implements ILoggerFactory {

    constructor() {
        log4js.configure({
            appenders: [
                { type: 'console', layout: { type: 'basic' } }
            ],
            replaceConsole: true
        });
    }

    /** Create a logger */
    CreateLogger(name: string): ILogger {
        let loggerName = name ? name : "Default";
        let log4Logger = log4js.getLogger(loggerName);
        
        return new DefaultLogger(log4Logger);
    }
}