import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modalStore'
import modaltwoReducer from './modalStore2'
import input from './inputStore'
import dataCard from './dataCardStore'




const store = configureStore({
    reducer:{
        modal : modalReducer ,
        modalTwo : modaltwoReducer,
        inputData : input ,
        dataCard : dataCard
    },
})

export default store;