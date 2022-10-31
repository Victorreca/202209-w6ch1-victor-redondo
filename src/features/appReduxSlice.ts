import { createSlice } from "@reduxjs/toolkit";

export interface AppRedux {
  id: number;
  name: string;
  done: boolean;
}

export interface AppReduxState {
  appRedux: AppRedux[];
}

const appReduxState{
  
}
const appReduxInitialState: AppReduxState = {
  list: [],
}


const appReduxSlice = createSlice({
  name: "appRedux",
  initialState: 
})
