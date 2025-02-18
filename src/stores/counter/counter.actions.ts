import { createAction, props } from '@ngrx/store'

const INCREMENT = '[Counter] Increment'
const INCREMENT_BY = '[Counter] Increment By'
const DECREMENT = '[Counter] Decrement'

export const increment = createAction<typeof INCREMENT>(INCREMENT)
export const incrementBy = createAction<typeof INCREMENT_BY, { payload: number }>(
  INCREMENT_BY,
  props<{ payload: number }>()
)
export const decrement = createAction<typeof DECREMENT>(DECREMENT)
