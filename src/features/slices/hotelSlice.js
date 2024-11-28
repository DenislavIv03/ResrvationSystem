import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
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
],
    filter: ""
}

const hotelSlice = createSlice({
    name: "hotelSlice",
    initialState,
    reducers: {
        setListFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})


export const selectHotels = (state) => state.hotels.list
export const selectFilter = (state) => state.hotels.filter

export const getVisibleHotels = createSelector(
    [selectHotels, selectFilter],
    (hotels, filter) => {
        return hotels.filter(hotel => {
            const hotelNameToLower = hotel.name.toLowerCase();
            const filterToLower = filter.toLowerCase();
            return hotelNameToLower.includes(filterToLower);
        })
    }
);

export const getSingleHotel = createSelector(
    [selectHotels,(state, id) => id],
    (hotels, id) => {
        return hotels.find(hotel => hotel.id === id);
    });

export const { setListFilter } = hotelSlice.actions

export default hotelSlice.reducer