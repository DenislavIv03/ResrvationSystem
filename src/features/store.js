import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bookCalendarReducer from "./slices/bookCalendarSlice"
import hotelReducer from "./slices/hotelSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        bookCalendar: bookCalendarReducer,
        hotels: hotelReducer
    }
})