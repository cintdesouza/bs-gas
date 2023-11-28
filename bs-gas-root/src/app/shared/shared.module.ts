import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AsideMenuComponent } from "./components/aside-menu/aside-menu.component";
import { HeaderComponent } from "./components/header/header.component";
import { InputComponent } from "./components/input/input.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";
import { RegisterEntryComponent } from "./components/register-entry/register-entry.component";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [InputComponent, MainSectionComponent, HeaderComponent, AsideMenuComponent, RegisterEntryComponent],
  declarations: [InputComponent, MainSectionComponent, HeaderComponent, AsideMenuComponent, RegisterEntryComponent],
})
export class SharedModule {}
