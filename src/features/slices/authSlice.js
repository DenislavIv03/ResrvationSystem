import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null || localStorage.getItem("user"),
};

const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", action.payload);
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        }
    }
})

export const { setUser, logout } = authSlice.actions

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer