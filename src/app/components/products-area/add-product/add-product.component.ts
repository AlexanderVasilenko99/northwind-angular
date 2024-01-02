import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  public constructor(private title: Title) { //DI 
  }

  public ngOnInit(): void { // identical to React's useEffect
    this.title.setTitle("Northwind Add Product");
  }
}
