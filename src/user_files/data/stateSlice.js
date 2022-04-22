import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'appState',
    initialState: {
        email: "Abubakar",
        password: "1233"
    },
    reducers: {
        removeAuthState: state => {
            state.email = ""
            state.password = ""
        },
        setEmailState: (state, action) => {
            state.email = action.payload
        },
        setPasswordState: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { removeAuthState, setEmailState,setPasswordState } = appSlice.actions
export default appSlice.reducer
