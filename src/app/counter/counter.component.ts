import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  counter$: Observable<number>; // subscribe edilebilir bir değer.
 
  constructor(private store: Store<{ counterState: number }>) {
    // select methodu ile store üzerinde tanımlanmış state değişikliğini dinlememizi olanak sağlayan reducer seçiliyor. 
    // redux mapStateToProps reactjs
    this.counter$ = store.select('counterState');
    // state içerisinde yapılar başka component içerisinde taakip edileceğinden observable tanımlanır.
  }


  ngOnInit(): void {
  }
 
  increment() {
    // store dispatch ile actionları invoke ederiz. 
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
