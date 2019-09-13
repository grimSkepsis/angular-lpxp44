
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
 
@Component({
  selector: 'app-my-counter',
  template: `<button id="increment" (click)="increment()">Increment</button>

            <div>Current Count: {{ count$ | async }}</div>

            <button id="decrement" (click)="decrement()">Decrement</button>

            <button id="reset" (click)="reset()">Reset Counter</button>`,
})
export class MyCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
