import React from 'react'
import './Modal.css'

function Modal() {
    const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  return (
    <>
    <div className='backdrop'></div>
    <div className="option-container">
        <ul className='lists'>
            {signs.map((sign , index) => {
                return <button key={index}>{sign}</button>
            })}
        </ul>
    </div>
    </>
    
  )
}

export default Modal