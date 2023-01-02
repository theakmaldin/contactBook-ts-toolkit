import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    contactsAction(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { contactsAction } = contactsSlice.actions;
