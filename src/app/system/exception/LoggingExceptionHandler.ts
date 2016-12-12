import { Injectable } from '@angular/core';
import * as Logging from '../logging/index';
import { IExceptionHandler } from './IExceptionHandler';

@Injectable()
export class LoggingExceptionHandler implements IExceptionHandler {
    private logger: Logging.ILogger;

    constructor(private loggerFactory: Logging.DefaultLoggerFactory) {
        this.logger = loggerFactory.CreateLogger("ExceptionHandler");
    }

    Handle(exception: Error): void {
        this.logger.Error(exception);
    }
}