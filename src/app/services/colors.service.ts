import { Injectable } from '@angular/core';
// ng g s services/service-name
@Injectable({
  providedIn: 'root' // build one instance fo the entire app
})
export class ColorsService {
  public getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
}
