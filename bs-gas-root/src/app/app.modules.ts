import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [AppComponent, HeaderComponent, AsideMenuComponent, MainSectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
