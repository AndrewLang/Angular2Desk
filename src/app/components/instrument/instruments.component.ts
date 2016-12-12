import { Component, OnInit, OnDestroy } from '@angular/core';


import { SidebarService } from '../services/SidebarService';
import * as System from '../../system/index';

@Component({
    templateUrl: 'src/views/instruments/instruments.html',
    providers: [SidebarService]
})
export class InstrumentsComponent implements OnInit, OnDestroy {
    IsSidebarVisible: boolean;

    constructor(private mSidebarService: SidebarService) {
        this.IsSidebarVisible = mSidebarService.IsSidebarVisible;
        console.log("Constructor of InstrumentsComponent.");
    }

    toggleSidebar() {
        if (this.mSidebarService.IsSidebarVisible)
            this.mSidebarService.HideSidebar();
        else
            this.mSidebarService.ShowSidebar();
        this.IsSidebarVisible = this.mSidebarService.IsSidebarVisible;
    }

    ngOnInit() {
    }
    ngOnDestroy() {

    }

    refresh() {

    }
    addInstrument() {

    }
    LaunchInteractiveIO(): void {
        System.Process.Start("C:\\Program Files\\Keysight\\IO Libraries Suite\\InteractiveIO.exe");
    }
    LaunchIoMonitor(): void {
        System.Process.Start("C:\\Program Files\\Keysight\\IO Libraries Suite\\IOMonitor.exe");
    }
}