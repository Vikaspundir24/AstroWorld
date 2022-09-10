import { createSlice } from "@reduxjs/toolkit";

const initialInputState = {
    Sign : '' , 
    Day : '' 
}

const inputSlice = createSlice({
    name : 'input' , 
    initialState : initialInputState ,
    reducers : {
        setSign(state, key) {
              state.Sign = key.payload
              console.log(state.Sign)
        } , 

        setDay (state , key) {
            state.Day = key.payload
            console.log(state.Day)

        }
    }
})

export default inputSlice.reducer;
export const inputAction = inputSlice.actions;
