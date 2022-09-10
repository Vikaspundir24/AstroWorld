import { createSlice } from "@reduxjs/toolkit";

const initalDataCardState = {
    isDataCardShow : false
}

const dataCardSlice = createSlice({
    name : 'dataCard' , 
    initialState : initalDataCardState , 
    reducers : {
        showDataCard(state) {
            state.isDataCardShow = true
        } , 
        dontshowDataCard(state) {
            state.isDataCardShow = false
        } , 
    }
})

export default dataCardSlice.reducer;
export const dataCardAction = dataCardSlice.actions;