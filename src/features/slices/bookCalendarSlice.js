import { createSlice } from "@reduxjs/toolkit";

const initialState = []

 const bookCalendarSlice = createSlice({
    name: "bookCalendarSlice",
    initialState,
    reducers: {
        reserveDate: (state, action) => {
            state.push(action.payload)
        }
    }
 })

 export const { reserveDate } = bookCalendarSlice.actions

 export const selectCalendarDates = (state) => state.bookCalendar
 export default bookCalendarSlice.reducer 