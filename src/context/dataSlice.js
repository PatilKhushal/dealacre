'use client'
import { createSlice } from '@reduxjs/toolkit'

// this is slice with inital states and actions(functions) to manipulate the state
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data : [],
    search : "",
    filter : "username",
    isDark : true,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    setSearch : (state, action) => {
      state.search = action.payload;
    },
    
    setFilter : (state, action) => {
      state.filter = action.payload;
    },

    setIsDark : (state, action) => {
      state.isDark = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setData, setSearch, setFilter, setIsDark } = dataSlice.actions

export default dataSlice.reducer;