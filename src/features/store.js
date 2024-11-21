import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/slices/userSlice";

export default configureStore({
    reducer: {
        user: userReducer
    }
})