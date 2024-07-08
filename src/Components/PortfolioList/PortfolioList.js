import React from 'react'
import './portfoliolist.scss'
const PortfolioList = ({list,active,setSelected,id}) => {
  return (
    <div>
      <li className={ active ? 'PortfolioList active' : 'PortfolioList'} onClick={(()=>setSelected(id))}>{list}</li>
    </div>
  )
}

export default PortfolioList
