import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    livingRoomLightOn: false,
    bedroomLightOn: false
}

export const lightSwitchSlice = createSlice({
    name: 'lightSwitch',
    initialState,
    reducers: {
        toggleMasterSwitch: (state, action) => {  
            
        },
        toggleKitchenLight: (state, action) => {
           
        },
    }
});

export const {toggleMasterSwitch, toggleKitchenLight, toggleLivingRoomLight, toggleBedroomLight} = lightSwitchSlice.actions;

export const selectMasterSwitchOn = (state) => state.lightSwitch.masterSwitchOn;
export const selectKitchenLightOn = (state) => state.lightSwitch.kitchenLightOn;
export const selectLivingRoomLightOn = (state) => state.lightSwitch.livingRoomLightOn;
export const selectBedroomLightOn = (state) => state.lightSwitch.bedroomLightOn;

export default lightSwitchSlice.reducer;