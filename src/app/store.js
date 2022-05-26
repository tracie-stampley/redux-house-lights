import { configureStore } from '@reduxjs/toolkit';
import lightSwitchReducer from '../features/lightSwitch/lightSwitchSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    lightSwitch: lightSwitchReducer,
    weather: weatherReducer
  },
});
