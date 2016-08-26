
import {Output, EventEmitter, Injectable}             from '@angular/core';

@Injectable()
export class SidebarService {
    IsSidebarVisible: boolean = false;
    @Output() onVisibleChanged: EventEmitter<any> = new EventEmitter();

    ShowSidebar(): void {
        this.IsSidebarVisible = true;
        this.onVisibleChanged.emit({ value:true});
    }
    HideSidebar(): void {
        this.IsSidebarVisible = false;
        this.onVisibleChanged.emit({value:false});
    }
}