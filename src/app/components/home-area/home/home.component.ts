import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorsService } from '../../../services/colors.service';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public constructor(private title: Title, private colorsService: ColorsService) { //DI 
  }
  public styling = { color: this.colorsService.getRandomColor() }
  public randomTitle = Math.random() < 0.5 ? "Hi" : "Bye";

  public ngOnInit(): void { // identical to React's useEffect
    this.title.setTitle("Northwind Home");
    // console.log(this.colorsService.getRandomColor());
  }

}
