import { createReducer, on } from '@ngrx/store'
import { increment, decrement, incrementBy } from './counter.actions'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ count: state.count + 1 })),
  on(decrement, (state) => ({ count: state.count - 1 })),
  on(incrementBy, (state, { payload }) => ({ count: state.count + payload }))
)
