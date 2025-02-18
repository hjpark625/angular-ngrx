import { createSelector } from '@ngrx/store'

import type { CounterState } from '@/stores/counter/counter.reducer'

export const selectCounter = (store: { root: { counter: CounterState } }) => {
  return store.root
}

export const counterSelector = createSelector(selectCounter, (state) => {
  return state.counter.count
})
