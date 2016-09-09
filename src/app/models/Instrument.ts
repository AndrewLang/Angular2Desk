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
    IsFavorite:boolean;
    IsLan:boolean;
    IsSdi:boolean;
    StaticallyDefined:boolean;
    IsSelected: boolean;
    Addresses: Address[];
    Drivers: Driver[];
    Aliases: Alias[];
}

export class Address {
    VisaAddress: string;
    DisplayState: string;
    ElementType: string;
    InstrumentKey: string;
    ParentHashKey:string;
    PersistentId: string;
    SiclAddress:string;
    AddressFormat: number;
    FavoriteConnection:boolean;
    IsPxi:boolean;
    StaticallyDefined: boolean;
}

export class Driver {
    CanUpdate: boolean;
    Versions: string[];
}

export class Alias{

}