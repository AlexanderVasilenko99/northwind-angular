import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorsService } from '../../../services/colors.service';
import { ClockComponent } from '../clock/clock.component';
import { CommonModule } from '@angular/common';
import { TestGeneratorComponent } from '../test-generator/test-generator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ClockComponent,
    TestGeneratorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public num = Math.floor(Math.random() * 2) + 1;

  public constructor(private title: Title, private colorsService: ColorsService) { //DI 
  }
  public styling = { color: this.colorsService.getRandomColor() }
  public randomTitle = Math.random() < 0.5 ? "Hi" : "Bye";

  public ngOnInit(): void { // identical to React's useEffect
    this.title.setTitle("Northwind Home");
    // console.log(this.colorsService.getRandomColor());
  }

}
