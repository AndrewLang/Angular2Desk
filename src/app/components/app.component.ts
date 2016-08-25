import {Component}                          from '@angular/core';
import {Routes, RouterModule}               from '@angular/router';

import {SidebarService}                     from './services/SidebarService';

@Component({
    selector: 'app',
    templateUrl: 'src/views/home.html',    
    providers:[ SidebarService]
})
export class AppComponent {
    IsSidebarVisible: boolean ;
    ShowFullSidebar: boolean = true;
    subscription: any;

    constructor(private mSidebarService: SidebarService) {
        this.subscription = mSidebarService.onVisibleChanged.subscribe(visible=> {
            this.IsSidebarVisible = visible;
        });
    }

    toggleSidebar() {
        this.ShowFullSidebar = !this.ShowFullSidebar;
    }
    

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}