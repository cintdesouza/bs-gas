import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../input/input.component';
import { MainSectionComponent } from './main-section.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [InputComponent],
  bootstrap: [MainSectionComponent],
})
export class AppModule {}
