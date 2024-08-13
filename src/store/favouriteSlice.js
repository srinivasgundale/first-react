import { createSlice } from "@reduxjs/toolkit";
const loadInitialState = () => {
    return [];
}
const initialState  = {
    items: loadInitialState()
  }; 
const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourite: (state,action) => {
            state.items.push(action.payload)
        },
        removeFromFavourite: (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addToFavourite, removeFromFavourite} = favouriteSlice.actions
export default favouriteSlice.reducer;