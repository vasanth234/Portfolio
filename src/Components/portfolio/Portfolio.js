import React from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import {useState,useEffect} from 'react'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from '../../data'
const Portfolio=()=>{
  const [selected,setSelected]=useState('featured');
  const [info,setInfo]=useState([])
  const item=[
    {
      id:'featured',
      title:'Featured',
    },
    {
      id:'web',
      title:'Web App',
    },
    {
      id:'mobile',
      title:'Mobile',
    },
    {
      id:'designing',
      title:'Designing',
    },
    {
      id:'branding',
      title:'Branding',
    },
  ]
  useEffect(()=>{
     switch(selected){
      case 'featured':
        setInfo(featuredPortfolio);
        break;
        case 'web':
        setInfo(webPortfolio);
        break;
        case 'mobile':
        setInfo(mobilePortfolio);
        break;
        case 'designing':
        setInfo(designPortfolio);
        break;
        case 'branding':
        setInfo(contentPortfolio);
        break;
        

     }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {item.map((demo)=>{
          return (
          <PortfolioList
          key={demo.id}  // Remember to add a key prop for each mapped element
          list={demo.title}
          active={selected === demo.id}
          setSelected={setSelected}
          id={demo.id}
          
        />
          )
        
        })}
      </ul>
      <div className='container'>
        {info.map((d)=>{
          return (
          <div className='item'>
          <img src={d.img} alt=''/>
          <h3>{d.title}</h3>
          </div>
          )
        }
          )
         
}
      
         
         
         
      </div>
    
   
    </div>
  )
}

export default Portfolio
