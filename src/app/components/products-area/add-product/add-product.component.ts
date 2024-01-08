import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ProductModel from '../../../models/product-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  public product = new ProductModel();

  public constructor(private title: Title, private productService: ProductsService, private router: Router) { //DI 
  }

  public saveImage(args: Event) {
    const input = args.target as HTMLInputElement;
    this.product.image = input.files[0];
    console.log(this.product.image);

  }

  public async send() {
    try {
      console.log(this.product);

      await this.productService.addProducts(this.product);
      this.router.navigateByUrl("/products")
    } catch (err) {
      console.log(err);
    }

  }
  public ngOnInit(): void { // identical to React's useEffect
    this.title.setTitle("Northwind Add Product");


  }
}
