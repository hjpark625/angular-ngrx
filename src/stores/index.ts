import { combineReducers } from '@ngrx/store'

import { counterReducer } from '@/stores/counter/counter.reducer'

export const rootReducer = combineReducers({
  counter: counterReducer
})
