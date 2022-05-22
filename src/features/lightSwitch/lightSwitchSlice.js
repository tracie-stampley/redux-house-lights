import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    masterSwitchOn: false,
    kitchenLightOn: false,
    livingRoomLightOn: false,
    bedroomLightOn: false
}

export const lightSwitchSlice = createSlice({
    name: 'lightSwitch',
    initialState,
    reducers: {
        toggleMasterSwitch: (state) => {  
            state.masterSwitchOn = !state.masterSwitchOn
        },
        toggleKitchenLight: (state) => {
            state.kitchenLightOn = !state.kitchenLightOn
        },
        toggleLivingRoomLight: (state) => {
            state.livingRoomLightOn = !state.livingRoomLightOn
        },
        toggleBedroomLight: (state) => {
            state.bedroomLightOn = !state.bedroomLightOn
        }
    }
});

export const {toggleMasterSwitch, toggleKitchenLight, toggleLivingRoomLight, toggleBedroomLight} = lightSwitchSlice.actions;

export const selectMasterSwitchOn = (state) => state.lightSwitch.masterSwitchOn;
export const selectKitchenLightOn = (state) => state.lightSwitch.kitchenLightOn;
export const selectLivingRoomLightOn = (state) => state.lightSwitch.livingRoomLightOn;
export const selectBedroomLightOn = (state) => state.lightSwitch.bedroomLightOn;

export default lightSwitchSlice.reducer;