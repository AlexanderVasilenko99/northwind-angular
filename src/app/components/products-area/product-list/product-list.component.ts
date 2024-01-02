import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public constructor(private title: Title) { //DI 
  }
  public ngOnInit(): void { // identical to React's useEffect
    this.title.setTitle("Northwind Products");
  }
}
