export class Instrument {
    Id: number;
    Model: string;
    Manufacturer: string;
    SerialNumber: string;
    Firmware: string;
    Description:string;
    FullImageUrl: string;
    IsSelected: boolean;
    Addresses: Address[];
    Drivers: Driver[];
}
export class Address {
    Address: string;
    Status: number;
}

export class Driver {
    CanUpdate: boolean;
    Versions: string[];
}