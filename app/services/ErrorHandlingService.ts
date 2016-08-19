import { Injectable} from '@angular/core';
// Error handling service
@Injectable()
export class ErrorHandlingService {

    constructor() {
    }

    HandleError(error) {
        console.log(error);
    }
}