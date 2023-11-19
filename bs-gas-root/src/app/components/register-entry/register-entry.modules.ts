import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../input/input.component';
import { RegisterEntryComponent } from './register-entry.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [InputComponent],
  bootstrap: [RegisterEntryComponent],
})
export class AppModule {}
