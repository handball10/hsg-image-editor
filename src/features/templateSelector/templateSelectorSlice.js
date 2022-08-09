import { createSlice } from '@reduxjs/toolkit';

import TEMPLATES from '../../templates/templates';

const initialState = {
    template: undefined
};


export const templateSelectorSlice = createSlice({
    name: 'templateData',
    initialState,
    reducers: {
        resetTemplate: (state, action) => {
            Object.assign(state, initialState);
        },
        setTemplate: (state, action) => {
            state.template = action.payload;
        }
    }
});

export const {
    setTemplate,
    resetTemplate
} = templateSelectorSlice.actions;

export const selectTemplate = state => TEMPLATES.find(({ id }) => id === state.templateData.template);

export default templateSelectorSlice.reducer;