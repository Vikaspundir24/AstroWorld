import React from 'react'
import './Header.css'

function Header() {
return (
<div className='navbar'>
  <div className="nav wrapper">
    <div className="left-nav">
      <h2>ASTRO<span>WORLD</span></h2>
    </div>

    <div className="right-nav">
      <h2>Sign In</h2>
       <button>Logout <span><i className="fa-solid fa-right-from-bracket"></i></span></button>
    </div>
  </div>

</div>
)
}

export default Header