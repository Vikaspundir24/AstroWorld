import React from 'react'
import { useDispatch } from 'react-redux'
import './ModalTwo.css'
import {inputAction} from './store/inputStore'
import {modaltwoAction} from './store/modalStore2'


function ModalTwo() {

  const days = ['Yesterday' , 'Today' , 'Tomorrow']


  const dispatch = useDispatch()

  const afterModalTwo = (event , index) => {
    event.preventDefault()
    dispatch (modaltwoAction.dontshowModal())
    dispatch (inputAction.setDay(index))
  }


  return (
    <>
    <div className='backdrop2'></div>
    <div className="option-container2">
        <ul className='lists2'>
        <h1>Select Day</h1>
      
            {days.map((day , index) => {
                return<button onClick={event => afterModalTwo(event , index)} key={index}>{day}</button>
            })}
        </ul>
    </div>
    </>
  )
}

export default ModalTwo