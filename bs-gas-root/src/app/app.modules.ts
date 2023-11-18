import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  declarations: [AppComponent, HeaderComponent, AsideMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
