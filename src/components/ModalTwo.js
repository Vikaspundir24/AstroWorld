import React from 'react'
import './ModalTwo.css'

function ModalTwo() {

  const days = ['yesterday' , 'today' , 'tomorrow']
  return (
    <>
    <div className='backdrop2'></div>
    <div className="option-container2">
        <ul className='lists2'>
            {days.map((day , index) => {
                return <button key={index}>{day}</button>
            })}
        </ul>
    </div>
    </>
  )
}

export default ModalTwo