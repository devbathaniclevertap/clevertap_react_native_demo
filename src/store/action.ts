// src/store/action.ts

// Action Types
export interface AddStuffAction {
  type: 'ADD_STUFF';
  payload: string;
}

export interface ClearStuffAction {
  type: 'CLEAR_STUFF';
}

export interface SetSelectedFunctionAction {
  type: 'SET_SELECTED_FUNCTION';
  payload: string;
}

// Combined Action Type
export type AppActions =
  | AddStuffAction
  | ClearStuffAction
  | SetSelectedFunctionAction;

// Action Creators
export const addStuff = (stuff: string): AddStuffAction => ({
  type: 'ADD_STUFF',
  payload: stuff,
});

export const clearStuff = (): ClearStuffAction => ({
  type: 'CLEAR_STUFF',
});

export const setSelectedFunction = (
  functionName: string,
): SetSelectedFunctionAction => ({
  type: 'SET_SELECTED_FUNCTION',
  payload: functionName,
});
