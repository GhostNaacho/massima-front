import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkerComponent } from './components/worker/worker.component';
import { EventsComponent } from './components/events/events.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'workers', component: WorkerComponent },
    { path: 'configuration', component: ConfigurationComponent },
    
];

