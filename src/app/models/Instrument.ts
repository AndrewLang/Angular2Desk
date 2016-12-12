import {Address}    from './Address';
import {Driver}     from './Driver';
import {Alias}      from './Alias';
import {DataPackage}    from './DataPackage';

export class Instrument {
    Id: number;
    Model: string;
    Manufacturer: string;
    SerialNumber: string;
    Firmware: string;
    Description:string;
    FullImageUrl: string;
    Action : string;
    AgentName: string;
    DisplayState: string;
    InstrumentType:string;
    WebPageUrl: string;
    IsFavorite:boolean;
    IsLan:boolean;
    IsSdi:boolean;
    StaticallyDefined:boolean;
    IsSelected: boolean;
    Addresses: Address[];
    Drivers: Driver[];
    Aliases: Alias[];
    Packages: DataPackage[];
}


