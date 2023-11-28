import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  declarations: [AppComponent, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
