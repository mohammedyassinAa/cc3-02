import { configureStore } from "@reduxjs/toolkit";
import CartsSlice from "./CartsSlice";
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        carts: CartsSlice.reducer
    }
})

export default store;