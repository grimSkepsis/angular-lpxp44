
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, setAutoIncrement } from './counter.actions';
 
@Component({
  selector: 'app-my-counter',
  template: `<button id="increment" (click)="increment()">Increment</button>

            <div>Current Count: {{ (counter$ | async ).count}}</div>

            <button id="decrement" (click)="decrement()">Decrement</button>

            <button id="reset" (click)="reset()">Reset Counter</button>
            <p>Auto Incrementing: {{ (counter$ | async ).autoIncrementing}}</p>
            <button (click)="startAutoIncrement()" >Start Auto Increment</button>
            <button (click)="stopAutoIncrement()" >Stop Auto Increment</button>`,
})
export class MyCounterComponent {
  counter$: Observable<{ count: number}>;
 
  constructor(private store: Store<{ count: number, autoIncrementing: boolean }>) {
    this.counter$ = store.pipe(select('counter'));
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

  startAutoIncrement() {
    this.store.dispatch(setAutoIncrement({startAutoIncrement: true}));
  }
  stopAutoIncrement() {
    this.store.dispatch(setAutoIncrement({startAutoIncrement: false}));
  }
}
