import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slice/counterSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
