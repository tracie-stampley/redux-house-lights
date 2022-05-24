import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    livingRoomLightOn: false,
    bedroomLightOn: false
}

export const lightSwitchSlice = createSlice({
    name: 'lightSwitch',
    initialState,
    reducers: {
        toggleBedroomLight: (state, action) => {
            state.bedroomLightOn = action.payload
        }
    }
});

export const {toggleBedroomLight} = lightSwitchSlice.actions;

export const selectBedroomLightOn = (state) => state.lightSwitch.bedroomLightOn;

export default lightSwitchSlice.reducer;