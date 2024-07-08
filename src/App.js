import React from 'react'
import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio'
import Works from './Components/works/Work'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import {useState} from 'react'
import Menu from './Components/menu/Menu'
import './app.scss'

const App = () => {
  const [menuopen,setMenuopen]=useState(true);
  return (
    <div className='App'>
     <Topbar menuopen={menuopen} setMenuopen={setMenuopen}/>
     <Menu menuopen={menuopen} setMenuopen={setMenuopen}/>
     <div className='sections'>
     
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>

     </div>
    </div>
  )
}

export default App;
