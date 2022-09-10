import React from 'react'
import { useDispatch } from 'react-redux'
import './Modal.css'
import { modalAction } from './store/modalStore'
import { modaltwoAction } from './store/modalStore2'
import {inputAction} from './store/inputStore'
import { dataCardAction } from './store/dataCardStore'


function Modal() {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']


    const dispatch = useDispatch()


    const showmodalTwo = (event , index) => {
      event.preventDefault()
      dispatch (modalAction.dontshowModal())
      dispatch (modaltwoAction.showModal())
      dispatch (inputAction.setSign(index))
      dispatch (dataCardAction.dontshowDataCard())
    }
    






  return (
    <>
    <div className='backdrop'></div>
    <div className="option-container">
        <ul className='lists'>
        <h1>Choose Your Zodiac</h1>
            {signs.map((sign , index) => {
                return <button onClick={event => showmodalTwo(event , index)} key={index}>{sign}</button>
            })}
        </ul>
    </div>
    </>
    
  )
}

export default Modal