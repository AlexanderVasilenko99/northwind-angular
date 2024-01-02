import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { ColorsService } from '../../../services/colors.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  public constructor(private colorsService: ColorsService) {
  }
  public style = { color: this.colorsService.getRandomColor() };
  private intervalId: number = 0;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.style = { color: this.colorsService.getRandomColor() }
    }, 5000);
  }
  ngOnDestroy(): void {
    window.clearInterval(this.intervalId)
  }
}
