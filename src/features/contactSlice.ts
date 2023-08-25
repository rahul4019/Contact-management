import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Contact, ContactState } from '../../types';

const initialState: ContactState = {
  Contacts: [],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.Contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      state.Contacts = state.Contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
