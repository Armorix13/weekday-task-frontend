import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./companySlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});
export default store;
