import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterSliceReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterContacts: filterSliceReducer,
  },
});
