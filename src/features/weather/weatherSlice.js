import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: undefined,
    status: 'idle',
    visible: false,
    error: null
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
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { viewWeatherData } = weatherSlice.actions

export const selectWeatherData = (state) => state.weather.data
export const selectWeatherStatus = (state) => state.weather.status

export default weatherSlice.reducer

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async () => {
    const response = await fetch('http://www.7timer.info/bin/api.pl?lon=-90.19789&lat=38.62727&product=civillight&output=json')
    const body = await response.json()
    return body
})