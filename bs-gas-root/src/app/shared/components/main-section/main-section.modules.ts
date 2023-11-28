import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "../../../app.routes";
import { SharedModule } from "../../shared.module";
import { InputComponent } from "../input/input.component";
import { MainSectionComponent } from "./main-section.component";

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, SharedModule],
  declarations: [InputComponent],
  bootstrap: [MainSectionComponent],
})
export class AppModule {}
