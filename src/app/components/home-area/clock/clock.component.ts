import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy {
  public time = new Date().toLocaleTimeString();
  private intervalId: number = 0;
  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000)
  }
  ngOnDestroy(): void {
    window.clearInterval(this.intervalId)
  }
}
