import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import signupSlice from "./signupSlice";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: {
    login: LoginSlice,
    signup: signupSlice,
    auth: authSlice
  }
})

export default store