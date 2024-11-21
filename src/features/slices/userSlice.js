import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("exp-token")

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer