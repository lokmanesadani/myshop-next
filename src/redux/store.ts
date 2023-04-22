import { configureStore } from "@reduxjs/toolkit";
import authSlice from "redux/slices/authSlice";
import filterProductsSlice from "redux/slices/filterProductsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    filterProducts: filterProductsSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
