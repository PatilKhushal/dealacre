'use client'
import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './context/dataSlice';

// this is the actual store for different slices i.e; states

export default configureStore({
  reducer: {
    'dataSlice' : dataSlice
  }
})