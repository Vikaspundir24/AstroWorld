import { createSlice } from "@reduxjs/toolkit";

const initialmodalTwoState = {
    ismodalTwoShown : false,
}

const modalTwoSlice = createSlice({
    name : 'modalTwo',
    initialState: initialmodalTwoState ,
    reducers : {
        showModal(state) {
            state.ismodalTwoShown = true
            
        } , 
        dontshowModal(state){
            state.ismodalTwoShown= false
            
           
        }
    }
})


export default modalTwoSlice.reducer;
export const modaltwoAction = modalTwoSlice.actions;