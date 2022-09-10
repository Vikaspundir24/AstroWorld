import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modalStore'
import modaltwoReducer from './modalStore2'
import input from './inputStore'




const store = configureStore({
    reducer:{
        modal : modalReducer ,
        modalTwo : modaltwoReducer,
        inputData : input
    },
})

export default store;