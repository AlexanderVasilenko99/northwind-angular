import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import ProductModel from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../utils/app-config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public async getAllProducts(): Promise<ProductModel[]> {
    const observable = this.httpClient.get<ProductModel[]>(appConfig.productsUrl);
    const products = await firstValueFrom(observable);
    return products;
  }

  public async addProducts(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("stock", product.stock.toString());
    formData.append("image", product.image);

    const observable = this.httpClient.post<ProductModel>(appConfig.productsUrl, formData);
    const addedProduct = await firstValueFrom(observable);
    console.log(addedProduct);
  }

}
