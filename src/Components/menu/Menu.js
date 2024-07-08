import React from 'react'
import './menu.scss'
const Menu = ({menuopen,setMenuopen}) => {
  return (
    <div className={'menu '+(menuopen && 'active')}>
      <ul>
        <li onClick={()=>setMenuopen(!menuopen)} ><a href='#intro '>Home</a></li>
        <li onClick={()=>setMenuopen(!menuopen)} ><a href='#portfolio'>Portfolio</a></li>
        <li onClick={()=>setMenuopen(!menuopen)}><a href='#works'>Works</a></li>
        <li onClick={()=>setMenuopen(!menuopen)}><a href='#testimonials'>Testimonials</a></li>
        <li onClick={()=>setMenuopen(!menuopen)}><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu
