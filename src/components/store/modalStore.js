import { createSlice } from "@reduxjs/toolkit";

const initalModalState = {
    ismodalShown : false
}

const modalSlice = createSlice({
    name : 'modal',
    initialState:initalModalState ,
    reducers : {
        showModal(state) {
            state.ismodalShown = true
        } , 
        dontshowModal(state){
            state.ismodalShown= false
        }
    }
})


export default modalSlice.reducer;
export const modalAction = modalSlice.actions;