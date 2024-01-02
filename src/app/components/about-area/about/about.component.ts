import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  public constructor(private title: Title) {
  }
  ngOnInit(): void {
    this.title.setTitle("Northwind About Us");
  }
}
