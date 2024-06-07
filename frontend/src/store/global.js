import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isLoading: false,
  msg: {},
  modalList: [],
  workingOrderLogs: [],
  backHistoryUrl: "",
  item: []
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setStage: (state, action) => {
      //let historyUrl = action.payload;
      Object.assign(state, {...action.payload})
      //state.backHistoryUrl = historyUrl;
    },
    setVariationGlobal : (state, action) => {
      const { data, field } = action.payload;
      state[ String( field ) ] = data;
    },
  
  },
  extraReducers: (builder) => {},
});

export default globalSlice;
export const globalReducer = globalSlice.reducer;
export const { setStage, setVariationGlobal } = globalSlice.actions;
