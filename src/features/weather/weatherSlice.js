import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: undefined,
    visible: false,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        viewWeatherData: (state, action) => {
            state.visible = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherData.pending, (state, action) => {
                state.status = 'loading'
            })
    }
})

export const { viewWeatherData } = weatherSlice.actions

export const selectWeatherData = (state) => state.weather.data
export const selectWeatherStatus = (state) => state.weather.status

export default weatherSlice.reducer

