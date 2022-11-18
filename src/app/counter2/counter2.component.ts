import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  counter$: Observable<number>;
 
  constructor(private store: Store<{ counterState: number }>) {
    this.counter$ = store.select('counterState');
  }


  ngOnInit(): void {
  }

}
