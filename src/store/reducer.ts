// src/store/reducer.ts

import {AppActions} from './action';

interface State {
  stuff: string[];
  selectedFunction: string;
}

const initialState: State = {
  stuff: [],
  selectedFunction: '',
};

const reducer = (state = initialState, action: AppActions): State => {
  switch (action.type) {
    case 'ADD_STUFF':
      return {...state, stuff: [...state.stuff, action.payload]};
    case 'CLEAR_STUFF':
      return {...state, stuff: []};
    case 'SET_SELECTED_FUNCTION':
      return {...state, selectedFunction: action.payload};
    default:
      return state;
  }
};

export default reducer;
