import {Component,OnInit, OnDestroy}        from '@angular/core';
import {Routes, RouterModule}               from '@angular/router';

import {SidebarService}                     from './services/SidebarService';

@Component({
    selector: 'app',
    //templateUrl: 'src/views/home.html',
    template:'<h2>app component</h2>',    
    providers:[ SidebarService]
})
export class AppComponent implements OnInit, OnDestroy {
    IsSidebarVisible: boolean ;
    ShowFullSidebar: boolean = true;
    subscription: any;

    constructor(private mSidebarService: SidebarService) {
        
    }

    toggleSidebar() {
        this.ShowFullSidebar = !this.ShowFullSidebar;
    }
    
    ngOnInit() {
        /*this.subscription = this.mSidebarService.onVisibleChanged.subscribe(visible => {
            this.IsSidebarVisible = visible;
        });*/
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}