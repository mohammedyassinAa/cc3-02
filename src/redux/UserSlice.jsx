import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data;
});

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            if (state.loading === "idle") {
            state.loading = "pending";
        }
    });
        builder.addCase(getUser.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
    });
},
});

export const userActions = UserSlice.actions
export default UserSlice;