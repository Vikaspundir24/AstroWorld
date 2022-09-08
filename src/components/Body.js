import React  from 'react'
import './Body.css'
import Modal from './Modal'
import ModalTwo from './ModalTwo'


function Body() {
return (
<div className="main wrapper">
    <div className="top-main">
        <h1>ASTROWORLD</h1>
        <h4>lets See Your Horoscope!</h4>
        <button>Get Started <span><i className="fa-solid fa-arrow-right"></i></span></button>
    </div>

    <Modal/>  
    <ModalTwo/>     
</div>

)
}

export default Body