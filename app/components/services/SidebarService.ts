import {EventEmitter}             from '@angular/core';

export class SidebarService {
    IsSidebarVisible: boolean = false;
   public onVisibleChanged: EventEmitter<any> = new EventEmitter();

    ShowSidebar(): void {
        this.IsSidebarVisible = true;
        this.onVisibleChanged.next(true);
    }
    HideSidebar(): void {
        this.IsSidebarVisible = false;
        this.onVisibleChanged.next(false);
    }
}