import {Injectable} from '@angular/core';
import {DataService} from '../../services/DataService';

@Injectable()
export class ApiService{

constructor( private mDataService : DataService){
    
}

    getInstruments(callback:(data:any)=>void){
        var command = { Name: "ACE-DoGetInstruments" };
        this.mDataService.Post("http://localhost:14029/api/commands", command, response => {

            callback(response);            
        });
    }
}