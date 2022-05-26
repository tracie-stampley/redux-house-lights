import { configureStore } from '@reduxjs/toolkit';
import lightSwitchReducer from '../features/lightSwitch/lightSwitchSlice';

export const store = configureStore({
  reducer: {
    lightSwitch: lightSwitchReducer,
  },
});
