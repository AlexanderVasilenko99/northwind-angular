import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  public generateRandomNumbers(count: number): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      const timerId = setInterval(() => {
        try {
          observer.next(Math.floor(Math.random() * 100));

          count--;

          if (count === 0) {
            clearInterval(timerId);
            observer.complete();
          }
          
        } catch (err) {
          clearInterval(timerId)
          observer.error(err)
        }
      }, 500);
    })
  }
}
