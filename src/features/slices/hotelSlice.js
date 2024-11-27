import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: crypto.randomUUID(),
        name: "Palermo Hotel",
        price: 200
    },
    {
        id: crypto.randomUUID(),
        name: "Aquatonic Resort",
        price: 800
    },
    {
        id: crypto.randomUUID(),
        name: "Baraka Premium Resort",
        price: 60
    },
    {
        id: crypto.randomUUID(),
        name: "Grand Hotel",
        price: 2200,
    },
]

const hotelSlice = createSlice({
    name: "hotelSlice",
    initialState,
})

export const selectHotels = (state) => state.hotels

export default hotelSlice.reducer