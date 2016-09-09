import {Instrument} from './Instrument';

export class Interface{
    Id:number;
    Name:string;
    Header:string;
    Instruments:Array<Instrument> = [];

    IsCollapse: boolean; 
}