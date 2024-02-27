import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },

  // reducres won't be needed eventually
  reduders: {},
});

export const usersReducer = usersSlice.reducer;
