import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-aside-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./aside-menu.component.html",
  styleUrl: "./aside-menu.component.sass",
})
export class AsideMenuComponent {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(["/"]);
  }
}
