import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BsGasModel, BsGasModelCreate } from '../models/bs-gas-model';

@Injectable({
  providedIn: 'root',
})
export class BsGasService {
  url = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.status} detail: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(): Observable<BsGasModel[]> {
    return this.http
      .get<BsGasModel[]>(this.url)
      .pipe((res) => res, retry(2), catchError(this.handleError));
  }

  postProduct(product: any): Observable<BsGasModelCreate> {
    return this.http
      .post<any>(this.url, product)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProduct(product: BsGasModel): Observable<BsGasModel> {
    return this.http
      .put<BsGasModel>(`${this.url}/${product.id}`, JSON.stringify(product))
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduct(productId: number) {
    return this.http
      .delete<BsGasModel>(`${this.url}/${productId}`)
      .pipe(retry(1), catchError(this.handleError));
  }
}
