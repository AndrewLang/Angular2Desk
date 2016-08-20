import { Routes, RouterModule }             from '@angular/router';

import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';

const appRoutes : Routes = [  
    {
        path:'/components/instruments/...',
        component: InstrumentsComponent
    },
    { 
        path:'/chassis/...',
        component:ChassisComponent
    },
    {
        path:'/settings',
        component:SettingsComponent
    },
    {
        path:'/help/...',
        component:HelpComponent
    }
 ];

 export const routing = RouterModule.forRoot( appRoutes );