import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.actions';
import { initialState } from '../states/counter.state';

// kullanıcının eyleme geçmesi sonrasında bir action çalıştırması dispatch etmesi sonucunda reducer state üzerinde değişim yapar. on methodu ile gelen action tipine göre state günceller.


export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1), // on eventi ile actionlara göre state günceller.
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);