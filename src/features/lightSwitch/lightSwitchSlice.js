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
        toggleMasterSwitch: (state, action) => {  
            state.masterSwitchOn = action.payload
            lightSwitchSlice.caseReducers.toggleKitchenLight(state, action);
            lightSwitchSlice.caseReducers.toggleLivingRoomLight(state, action);
            lightSwitchSlice.caseReducers.toggleBedroomLight(state, action);
        },
        toggleKitchenLight: (state, action) => {
            console.log(action)
            state.kitchenLightOn = action.payload
        },
        toggleLivingRoomLight: (state, action) => {
            state.livingRoomLightOn = action.payload
        },
        toggleBedroomLight: (state, action) => {
            state.bedroomLightOn = action.payload
        }
    }
});

export const {toggleMasterSwitch, toggleKitchenLight, toggleLivingRoomLight, toggleBedroomLight} = lightSwitchSlice.actions;

export const selectMasterSwitchOn = (state) => state.lightSwitch.masterSwitchOn;
export const selectKitchenLightOn = (state) => state.lightSwitch.kitchenLightOn;
export const selectLivingRoomLightOn = (state) => state.lightSwitch.livingRoomLightOn;
export const selectBedroomLightOn = (state) => state.lightSwitch.bedroomLightOn;

export default lightSwitchSlice.reducer;