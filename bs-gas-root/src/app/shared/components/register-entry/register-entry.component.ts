import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../input/input.component";
import { Router } from "@angular/router";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { BsGasService } from '../../../services/bs-gas.service';

@Component({
  selector: "app-register-entry",
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: "./register-entry.component.html",
  styleUrl: "./register-entry.component.sass",
})
export class RegisterEntryComponent {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  constructor(private bsService: BsGasService) {}

  public submitForm(form: NgForm) {
    const formattedForm = {
      operation: form.value.operation,
      movement: form.value.movement,
      situation: form.value.situation,
      model: Number(form.value.model),
      series: Number(form.value.series),
      number: Number(form.value.number),
      supplier: form.value.supplier,
      issueDate: form.value.issueDate.toString(),
      genDate: form.value.genDate.toString(),
      employee: form.value.employee,
      freight: Number(form.value.freight),
      totalValue: Number(form.value.totalValue),
      product: form.value.product,
      quantity: Number(form.value.quantity),
      unit: Number(form.value.unit),
      unitaryValue: Number(form.value.unitaryValue),
      total: Number(form.value.total),
      discount: Number(form.value.discount),
      productFreight: Number(form.value.productFreight),
      expenses: Number(form.value.expenses),
      insurance: Number(form.value.insurance),
      icms: Number(form.value.icms),
      icmsST: Number(form.value.icmsST),
      ipi: Number(form.value.ipi),
      pis: Number(form.value.pis),
      cofins: Number(form.value.cofins),
      reweighing: form.value.reweighing.toString(),
      weight: Number(form.value.weight),
      reweighingValue: Number(form.value.reweighingValue),
      method: form.value.method,
      finalTotal: Number(form.value.finalTotal),
      account: form.value.account,
      condition: form.value.condition
    }

    return this.bsService.postProduct(formattedForm).subscribe((res) => {res})
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
  reweighingLabel = "Valor Repesagem"

  paymentLabel = "Meio de pagamento"
  registerLabel = "Caixa contábil"
  conditionLabel = "Condição de Pagamento"

  textType = "text";
  dateType = "date";
  numberType = "number";
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
