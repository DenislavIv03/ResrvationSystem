import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
    // {
    //     id: crypto.randomUUID(),
    //     name: "Palermo Hotel",
    //     price: 200
    // },
    // {
    //     id: crypto.randomUUID(),
    //     name: "Aquatonic Resort",
    //     price: 800
    // },
    // {
    //     id: crypto.randomUUID(),
    //     name: "Baraka Premium Resort",
    //     price: 60
    // },
    // {
    //     id: crypto.randomUUID(),
    //     name: "Grand Hotel",
    //     price: 2200,
    // },
    {
        id: 1,
        thumbnail: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
        title: "Luxury Hotel Stay",
        price: 150,
      },
      {
        id: 2,
        thumbnail: "https://www.tripsavvy.com/thmb/_Rt3jkxaF5P_UrB2CewwHIquJ2U=/1920x1365/filters:fill(auto,1)/pacificterracehotel-bd2dcb7b9d5c4dda9adf004b4aa8b0a5.jpg",
        title: "Beach Resort",
        price: 200,
      },
      {
        id: 3,
        thumbnail: "https://www.fodors.com/wp-content/uploads/2017/10/mnt14.jpg",
        title: "Mountain Retreat",
        price: 180,
      },
      {
        id: 4,
        thumbnail: "https://cache.marriott.com/content/dam/marriott-renditions/DXBHG/dxbhg-guestroom-0012-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=*:645",
        title: "Al Habtoor Grand Resort",
        price: 210,
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
            const hotelNameToLower = hotel.title.toLowerCase();
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