import { Routes } from '@angular/router';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { RegisterEntryComponent } from './components/register-entry/register-entry.component';

export const routes: Routes = [
    { path: '', component: MainSectionComponent },
    { path: 'new', component: RegisterEntryComponent }
];
