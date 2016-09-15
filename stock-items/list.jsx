import React from 'react'
import { StockItem, StockItemAdd } from './item'

export const StockItemsList = (props) => {
  const stockItems = props.state.list.map((item, i) => <StockItem state={item} key={i} />)

  return (
    <ul>        
      {stockItems}
      <StockItemAdd state={props.state.form} />        
    </ul>
  )
} 

