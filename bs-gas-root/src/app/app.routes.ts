import { Routes } from "@angular/router";
import { MainSectionComponent } from "./shared/components/main-section/main-section.component";
import { RegisterEntryComponent } from "./shared/components/register-entry/register-entry.component";

export const routes: Routes = [
    { path: "", component: MainSectionComponent },
    { path: "new", component: RegisterEntryComponent }
];
