

import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import {AppComponent}                       from './components/app.component';
import {InstrumentsComponent}               from './components/instrument/instruments.component';
import {ChassisComponent}                   from './components/chassis/chassis.component';
import {SettingsComponent}                  from './components/setting/settings.component';
import {HelpComponent}                      from './components/help/help.component';
import {InstrumentListComponent}            from './components/instrument/instruments-list.component';

import {instrumentRoutes}                   from './components/instrument/instrument.routing';
import {TestComponent} from './components/test/test.component.ts';

const rootRoutes: Routes = [
    // { path: '', redirectTo: '/chassis', pathMatch:'full' },
    // { path :'', component:TestComponent},
    // { path: 'home', component:AppComponent},
    // { path: 'instruments', component: InstrumentsComponent,
    //     children:[
    //         { path: '', component: InstrumentListComponent },
    //     ]
    // },
    // { path: 'chassis', component: ChassisComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'help', component: HelpComponent },    
];

const appRoutes: Routes = [
   ...rootRoutes,
   ...instrumentRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);