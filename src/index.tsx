// store/index.ts (without Redux Toolkit, using createStore directly)
import {createStore} from 'redux';
import reducer from './store/reducer';

export const store = createStore(reducer);

// Dispatch types for the actions
export type AppDispatch = typeof store.dispatch;
