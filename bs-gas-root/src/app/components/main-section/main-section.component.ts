import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { InputComponent } from "../input/input.component";

@Component({
  selector: "app-main-section",
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: "./main-section.component.html",
  styleUrl: "./main-section.component.sass",
})
export class MainSectionComponent {
  private router = inject(Router);

  operationLabel = "Operação";
  dataLabel = "Data";
  noteLabel = "Número Nota";
  clientLabel = "Cliente";
  supplierLabel = "Fornecedor";
  sinceLabel = "Desde";
  toLabel = "Até";

  textType = "text";
  dateType = "date";
  search = "Buscar";
  select = "Selecione";
  typeHere = "Digite aqui";

  navigateToNewEntry() {
    this.router.navigate(["/new"]);
  }
}
