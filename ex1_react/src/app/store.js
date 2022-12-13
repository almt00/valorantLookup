import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ex3/features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})