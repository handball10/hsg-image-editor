import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    template: null
};


export const canvasDataSlice = createSlice({
    name: 'canvasData',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        resetData: (state, action) => {
            Object.assign(state, initialState);
        },
        setTemplate: (state, action) => {
            state.template = action.payload;
        }
    }
});

export const {
    setData,
    setTemplate,
    resetData
} = canvasDataSlice.actions;

export const selectData = state => state.canvasData.data;

export default canvasDataSlice.reducer;