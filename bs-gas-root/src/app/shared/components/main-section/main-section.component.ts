import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { BsGasService } from '../../../services/bs-gas.service';
import { BsGasModel } from '../../../models/bs-gas-model';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.sass',
})
export class MainSectionComponent implements OnInit {
  private router = inject(Router);

  operationLabel = 'Operação';
  dataLabel = 'Data';
  noteLabel = 'Número Nota';
  clientLabel = 'Cliente';
  supplierLabel = 'Fornecedor';
  sinceLabel = 'Desde';
  toLabel = 'Até';

  textType = 'text';
  dateType = 'date';
  search = 'Buscar';
  select = 'Selecione';
  typeHere = 'Digite aqui';

  navigateToNewEntry() {
    this.router.navigate(['/new']);
  }

  constructor(private _bsService: BsGasService) {}

  product = {} as BsGasModel | null | undefined;
  products = [] as BsGasModel[] | null | undefined;

  ngOnInit(): void {
    this._bsService.getProducts().subscribe((res) => {this.products = res});
  }

  public destroyProduct(productId: number, index: number) {
    this._bsService.deleteProduct(productId).subscribe(() => {this.products?.splice(index, 1)})
  }
}
