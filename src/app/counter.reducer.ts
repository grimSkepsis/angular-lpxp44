import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setAutoIncrement } from './counter.actions';

export const initialState = {count: 0, autoIncrementing: false};

const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, count: state.count + 1})),
  on(decrement, state => ({...state, count: state.count - 1})),
  on(setAutoIncrement, (state, {startAutoIncrement}) => ({...state, autoIncrementing: startAutoIncrement})),
  on(reset, state => initialState)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}