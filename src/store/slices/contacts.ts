import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  contactDetails: [],
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    contactAction(state, action) {
      state.contacts = action.payload;
    },
    getContactDetails(state, action) {
      state.contactDetails = action.payload;
      // console.log(getContactsDetails);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { contactAction } = contactsSlice.actions;
export const { getContactDetails } = contactsSlice.actions;
