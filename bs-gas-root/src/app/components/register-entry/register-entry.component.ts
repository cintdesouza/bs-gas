import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../input/input.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-entry",
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: "./register-entry.component.html",
  styleUrl: "./register-entry.component.sass",
})
export class RegisterEntryComponent {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  operationLabel = "Operação";
  movementLabel = "Tipo de Movimento";
  situationLabel = "Situação";
  seriesLabel = "Série";
  numberLabel = "Número";
  supplierLabel = "Fornecedor";
  dateLabel = "Data de Emissão";
  genDateLabel = "Data de Geração";
  employeeLabel = "Funcionário";
  freightLabel = "Frete";
  totalValueLabel = "Valor total";

  productLabel = "Produto"
  quantityLabel = "Quantidade"
  unitLabel = "Unidade"
  unitaryLabel = "Valor unitário"
  totalLabel = "Total"

  discountLabel = "Desconto"
  expenseLabel = "Despesas Acessórias"
  insuranceLabel = "Seguro"
  icmsLabel = "ICMS"

  icmsstLabel = "ICMS ST"
  ipiLabel = "IPI"
  pisLabel = "PIS"
  cofinsLabel = "COFINS"
  weightLabel = "Peso"

  paymentLabel = "Meio de pagamento"
  registerLabel = "Caixa contábil"
  conditionLabel = "Condição de Pagamento"

  textType = "text";
  dateType = "date";
  search = "Buscar";
  entry = "Entrada";
  newPlaceholder = "Novo";
  numberZero = "0";
  select = "Selecione";
  typeHere = "Digite aqui";
  valuePlaceholder = "R$ 0,00";
  totalValuePlaceholder = "R$ 1.500,00";

  unPlaceholder = "UN"
  weightPlaceholder = "000,0000 kg"
  methodPlaceholder = "À vista"
  registerPlaceholder = "Caixa"
  conditionPlaceholder = "0/30/60"
}
