import {Component}                          from '@angular/core';
import { ROUTER_DIRECTIVES}                 from '@angular/router';

import {InstrumentsComponent}               from './instrument/instruments.component';
import {ChassisComponent}                   from './chassis/chassis.component';
import {SettingsComponent}                  from './setting/settings.component';
import {HelpComponent}                      from './help/help.component';

import {SidebarService}                     from './services/SidebarService';

@Component({
    selector: 'app',
    templateUrl: 'views/home.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[ SidebarService]
})
/*@RouteConfig([
    { path: '/instruments/...', name: 'Instruments', component: InstrumentsComponent, useAsDefault: true },
    { path: '/chassies/...', name: 'Chassises', component: ChassisComponent },
    { path: '/settings/...', name: 'Settings', component: SettingsComponent },
    { path: '/help/...', name: 'Help', component: HelpComponent },
    { path: '/**', redirectTo: ['Instruments'] }
])*/
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