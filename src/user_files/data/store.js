import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from './stateSlice'
export default configureStore({
    reducer: {
        appState: appDataReducer
    }
})