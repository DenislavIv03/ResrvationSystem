import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bookCalendarReducer from "./slices/bookCalendarSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        bookCalendar: bookCalendarReducer,
    }
})