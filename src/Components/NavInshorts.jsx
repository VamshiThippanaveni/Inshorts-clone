import React from 'react'
import './NavInshorts.css'
import HambrgerDrawer from './HamburgDrawer.jsx'

const NavInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <HambrgerDrawer setCategory={setCategory}/>
      </div>
      <img 
      style={{cursor:'pointer'}}
      src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
      height="80%"
      alt='logo' />
    </div>
  )
}

export default NavInshorts
