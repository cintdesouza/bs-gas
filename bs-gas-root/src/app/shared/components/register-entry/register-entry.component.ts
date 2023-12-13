import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "../input/input.component";
import { Router } from "@angular/router";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
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
    operation: ['', Validators.required],
      movement: ['', Validators.required],
      situation: ['', Validators.required],
      model: ['', Validators.required],
      series: ['', [Validators.required, Validators.min(1)]],
      number: ['', [Validators.required, Validators.min(1)]],
      supplier: ['', Validators.required],
      issueDate: ['', Validators.required],
      genDate: ['', Validators.required],
      employee: ['', Validators.required],
      freight: ['', [Validators.required, Validators.min(1)]],
      totalValue: ['', [Validators.required, Validators.min(1)]],
      product: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      unit: ['', [Validators.required, Validators.min(1)]],
      unitaryValue: ['', [Validators.required, Validators.min(1)]],
      total: ['', [Validators.required, Validators.min(1)]],
      discount: ['', [Validators.required, Validators.min(1)]],
      productFreight: ['', [Validators.required, Validators.min(1)]],
      expenses: ['', [Validators.required, Validators.min(1)]],
      insurance: ['', [Validators.required, Validators.min(1)]],
      icms: ['', [Validators.required, Validators.min(1)]],
      icmsST: ['', [Validators.required, Validators.min(1)]],
      ipi: ['', [Validators.required, Validators.min(1)]],
      pis: ['', [Validators.required, Validators.min(1)]],
      cofins: ['', [Validators.required, Validators.min(1)]],
      reweighing: ['', Validators.required],
      weight: ['', [Validators.required, Validators.min(1)]],
      reweighingValue: ['', [Validators.required, Validators.min(1)]],
      method: ['', Validators.required],
      finalTotal: ['', [Validators.required, Validators.min(1)]],
      account: ['', Validators.required],
      condition: ['', Validators.required]
  })

  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  public freightValue: string | number | null = ""
  public unitaryValue: string | number | null = ""
  public quantityValue: string | number | null = ""
  public discountValue: string | number | null = ""
  public productFreightValue: string | number | null = ""
  public expensesValue: string | number | null = ""
  public insuranceValue: string | number | null = ""
  public icmsValue: string | number | null = ""
  public icmsstValue: string | number | null = ""
  public ipiValue: string | number | null = ""
  public pisValue: string | number | null = ""
  public cofinsValue: string | number | null = ""
  public reweighingValue: string | number | null = ""
  public totalValue: number = 0
  public finalValue: number = 0
  public unitaryTotal: number = 0

  constructor(private _bsService: BsGasService) {
    this.registryForm.get("freight")?.valueChanges.subscribe(value => {
      this.freightValue = value

      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      this.totalValue = (Number(this.freightValue))
      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      if (typeof(this.unitaryValue) != "number") {
        this.unitaryValue = 0
      }
      if (typeof(this.productFreightValue) != "number") {
        this.productFreightValue = 0
      }
      if (typeof(this.expensesValue) != "number") {
        this.expensesValue = 0
      }
      if (typeof(this.insuranceValue) != "number") {
        this.insuranceValue = 0
      }
      if (typeof(this.icmsValue) != "number") {
        this.icmsValue = 0
      }
      if (typeof(this.icmsstValue) != "number") {
        this.icmsstValue = 0
      }
      if (typeof(this.ipiValue) != "number") {
        this.ipiValue = 0
      }
      if (typeof(this.pisValue) != "number") {
        this.pisValue = 0
      }
      if (typeof(this.cofinsValue) != "number") {
        this.cofinsValue = 0
      }
      if (typeof(this.reweighingValue) != "number") {
        this.reweighingValue = 0
      }
      if (typeof(this.quantityValue) != "number" || Number(this.quantityValue) <= 0) {
        this.quantityValue = 1
      }
      if (typeof(this.discountValue) != "number") {
        this.discountValue = 0
      }
      
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("totalValue")?.setValue(this.totalValue.toString(), { onlySelf: true })
    })


    this.registryForm.get("quantity")?.valueChanges.subscribe(value => {
      this.quantityValue = value
      this.unitaryTotal = (Number(this.unitaryValue)) * Number(this.quantityValue)
      
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }
      
      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      if (typeof(this.unitaryTotal) != "number") {
        this.unitaryTotal = 0
      }
      
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })


    this.registryForm.get("unitaryValue")?.valueChanges.subscribe(value => {
      this.unitaryValue = value
      this.unitaryTotal = (Number(this.unitaryValue)) * Number(this.quantityValue)    
     
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      this.totalValue = (Number(this.freightValue))
      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      if (typeof(this.unitaryTotal) != "number") {
        this.unitaryTotal = 0
      }
      
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })


    this.registryForm.get("discount")?.valueChanges.subscribe(value => {
      this.discountValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })


    this.registryForm.get("productFreight")?.valueChanges.subscribe(value => {
      this.productFreightValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })


    this.registryForm.get("expenses")?.valueChanges.subscribe(value => {
      this.expensesValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
    

    this.registryForm.get("insurance")?.valueChanges.subscribe(value => {
      this.insuranceValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
    

    this.registryForm.get("icms")?.valueChanges.subscribe(value => {
      this.icmsValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
        

    this.registryForm.get("icmsST")?.valueChanges.subscribe(value => {
      this.icmsstValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
            

    this.registryForm.get("ipi")?.valueChanges.subscribe(value => {
      this.ipiValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
     

    this.registryForm.get("pis")?.valueChanges.subscribe(value => {
      this.pisValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
            

    this.registryForm.get("cofins")?.valueChanges.subscribe(value => {
      this.cofinsValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
                

    this.registryForm.get("reweighingValue")?.valueChanges.subscribe(value => {
      this.reweighingValue = value
            
      this.finalValue = ((Number(this.freightValue) + Number(this.unitaryValue) + Number(this.productFreightValue) + Number(this.expensesValue) + 
      Number(this.insuranceValue) + Number(this.icmsValue) + Number(this.icmsstValue) + Number(this.ipiValue) + Number(this.pisValue) +
      Number(this.cofinsValue) + Number(this.reweighingValue)) * Number(this.quantityValue)) - Number(this.discountValue)
      if (Number(this.quantityValue) < 1) {
        this.quantityValue == "1"
      }

      if (typeof(this.finalValue) != "number" && this.finalValue < 0) {
        this.finalValue = 0
      }
      this.registryForm.get("finalTotal")?.setValue(this.finalValue.toString(), { onlySelf: true })
      this.registryForm.get("total")?.setValue(this.unitaryTotal.toString(), { onlySelf: true })
    })
  }

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

  return this._bsService.postProduct(formattedForm).subscribe((res) => {res})
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
