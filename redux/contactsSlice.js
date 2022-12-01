import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}

export default contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContactsReducer:(state, action) => {
            state.contacts = action.payload;
        },
        addContactReducer:(state, action) => {
            state.contacts.push(action.payload)
        }
    }
});

export const {
    setContactsReducer,
    addContactReducer,
} = contactSlice.actions;


