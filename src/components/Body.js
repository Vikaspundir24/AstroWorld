import {useDispatch} from 'react-redux';
import React  from 'react'
import './Body.css'
import { modalAction } from './store/modalStore';




function Body() {


const dispatch = useDispatch()


const showModal = (event) =>{
    event.preventDefault();
    dispatch (modalAction.showModal())
   
    
}




return (
<div className="main wrapper">
    <div className="top-main">
        <h1>ASTROWORLD</h1>
        <h4>lets See Your Horoscope!</h4>
        <button onClick={showModal}>Get Started <span><i className="fa-solid fa-arrow-right"></i></span></button>
    </div>

      
</div>

)
}

export default Body