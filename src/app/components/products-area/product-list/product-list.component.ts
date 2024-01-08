import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../services/products.service';
import ProductModel from '../../../models/product-model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public constructor(private title: Title, private productService: ProductsService) { } //DI

  public products: ProductModel[] = [];

  public async ngOnInit(): Promise<void> { // identical to React's useEffect
    try {
      this.title.setTitle("Northwind Products");

      this.products = await this.productService.getAllProducts()

    } catch (err) {
      console.log(err);

    }

  }
}
