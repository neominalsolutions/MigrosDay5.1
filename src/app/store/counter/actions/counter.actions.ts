import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');


// biz global bir state değiştirecek ise buradaki action ile eyleme geçiyoruz.
// action type parametresi geçilir. Hangi tipte bir eylem gerçekleştiğini reducer anlaması için