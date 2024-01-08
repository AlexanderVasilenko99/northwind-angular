import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../../services/generator.service';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-test-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-generator.component.html',
  styleUrl: './test-generator.component.css'
})
export class TestGeneratorComponent {
  public arr: number[] = [];

  constructor(private generatorService: GeneratorService) { }

  public start(): void {
    const observable = this.generatorService.generateRandomNumbers(20);
    // subscribe without operators

    // observable.subscribe({
    //   next: num => this.arr.push(num),
    //   error: err => alert(err.message),
    //   complete: () => document.title = 'Done!'
    // })

    // subscribe w filter

    observable.pipe(map(n => n ** 2)).subscribe({
      next: num => this.arr.push(num),
      error: err => alert(err.message),
      complete: () => document.title = 'Done!'
    })
  }

}
