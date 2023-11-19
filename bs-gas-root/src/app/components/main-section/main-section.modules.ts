import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "../../app.routes";
import { InputComponent } from "../input/input.component";
import { MainSectionComponent } from "./main-section.component";

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  declarations: [InputComponent],
  bootstrap: [MainSectionComponent],
})
export class AppModule {}
