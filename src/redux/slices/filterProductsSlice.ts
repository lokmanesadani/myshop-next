import { createSlice } from "@reduxjs/toolkit";

interface FilterProductsState {
  condition: string[];
  range: {
    min?: number;
    max?: number;
  };
  filter: any;
}
const initialState: FilterProductsState = {
  condition: [],
  range: {},
  filter: {},
};

export const filterProductsSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    setConditions: (state, action) => {
      state.condition = action.payload;
    },
    setMin: (state, action) => {
      if (action.payload === null) {
        const { min, ...rest } = state.range;
        state.range = rest;
      } else {
        state.range = { ...state.range, min: action.payload };
      }
      console.log(state.range);
    },
    setMax: (state, action) => {
      if (action.payload === null) {
        const { max, ...rest } = state.range;
        state.range = rest;
      } else state.range = { ...state.range, max: action.payload };
      console.log(state.range);
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
      console.log(state.filter);
    },
  },
});

export const { setConditions, setMin, setMax, setFilter } =
  filterProductsSlice.actions;

export default filterProductsSlice.reducer;

// export the type
