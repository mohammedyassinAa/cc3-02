import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk("carts/getCarts", async () => {
            const response = await axios.get("https://dummyjson.com/carts");
            return response.data;
});

export const CartsSlice = createSlice({
    name: "carts",
    initialState: {
        data: [],
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCarts.pending, (state, action) => {
            if (state.loading === "idle") {
            state.loading = "pending";
        }
        });
        builder.addCase(getCarts.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        });
    },
});

export const CartsActions = CartsSlice.actions;
export default CartsSlice;