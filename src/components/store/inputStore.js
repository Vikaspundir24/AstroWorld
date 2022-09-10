import { createSlice } from "@reduxjs/toolkit";

const initialInputState = {
    Sign : '' , 
    Day : '' 
}

const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
const days = ['Yesterday' , 'Today' , 'Tomorrow']

const inputSlice = createSlice({
    name : 'input' , 
    initialState : initialInputState ,
    reducers : {
        setSign(state, key) {
              state.Sign = signs[key.payload]
             /*  console.log(state.Sign) */
        } , 

        setDay (state , key) {
            state.Day =  days[key.payload]
        /*     console.log(state.Day) */

        }
    }
})

export default inputSlice.reducer;
export const inputAction = inputSlice.actions;
