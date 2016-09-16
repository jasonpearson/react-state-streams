import React from 'react'
import { StockItem, StockItemAdd } from './item'

export const StockItemsList = (props) => {
  const stockItems = props.state.list.map((item, i) => 
    <StockItem 
      key={i} 
      item={item} 
      ui={props.state.ui}>
    </StockItem>
  )

  return (
    <ul className="stock-items-list">        
      {stockItems}
      <StockItemAdd ui={props.state.ui} />        
    </ul>
  )
} 

