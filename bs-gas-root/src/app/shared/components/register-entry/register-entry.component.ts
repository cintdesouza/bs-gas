import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../input/input.component";
import { Router } from "@angular/router";
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { BsGasService } from '../../../services/bs-gas.service';

@Component({
  selector: "app-register-entry",
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: "./register-entry.component.html",
  styleUrl: "./register-entry.component.sass",
})
export class RegisterEntryComponent {
  #fb = inject(FormBuilder)

  public registryForm = this.#fb.group({
    operation: [''],
      movement: [''],
      situation: [''],
      model: [''],
      series: [''],
      number: [''],
      supplier: [''],
      issueDate: [''],
      genDate: [''],
      employee: [''],
      freight: [''],
      totalValue: [''],
      product: [''],
      quantity: [''],
      unit: [''],
      unitaryValue: [''],
      total: [''],
      discount: [''],
      productFreight: [''],
      expenses: [''],
      insurance: [''],
      icms: [''],
      icmsST: [''],
      ipi: [''],
      pis: [''],
      cofins: [''],
      reweighing: [''],
      weight: [''],
      reweighingValue: [''],
      method: [''],
      finalTotal: [''],
      account: [''],
      condition: ['']
  })

  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  constructor(private bsService: BsGasService) {}

  public submitForm() {
    const formattedForm = {
      operation: this.registryForm.value.operation,
      movement: this.registryForm.value.movement,
      situation: this.registryForm.value.situation,
      model: Number(this.registryForm.value.model),
      series: Number(this.registryForm.value.series),
      number: Number(this.registryForm.value.number),
      supplier: this.registryForm.value.supplier,
      issueDate: this.registryForm.value.issueDate!.toString(),
      genDate: this.registryForm.value.genDate!.toString(),
      employee: this.registryForm.value.employee,
      freight: Number(this.registryForm.value.freight),
      totalValue: Number(this.registryForm.value.totalValue),
      product: this.registryForm.value.product,
      quantity: Number(this.registryForm.value.quantity),
      unit: Number(this.registryForm.value.unit),
      unitaryValue: Number(this.registryForm.value.unitaryValue),
      total: Number(this.registryForm.value.total),
      discount: Number(this.registryForm.value.discount),
      productFreight: Number(this.registryForm.value.productFreight),
      expenses: Number(this.registryForm.value.expenses),
      insurance: Number(this.registryForm.value.insurance),
      icms: Number(this.registryForm.value.icms),
      icmsST: Number(this.registryForm.value.icmsST),
      ipi: Number(this.registryForm.value.ipi),
      pis: Number(this.registryForm.value.pis),
      cofins: Number(this.registryForm.value.cofins),
      reweighing: this.registryForm.value.reweighing!.toString(),
      weight: Number(this.registryForm.value.weight),
      reweighingValue: Number(this.registryForm.value.reweighingValue),
      method: this.registryForm.value.method,
      finalTotal: Number(this.registryForm.value.finalTotal),
      account: this.registryForm.value.account,
      condition: this.registryForm.value.condition
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
