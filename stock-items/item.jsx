import React from 'react'
import { addStockItem, toggleAddItemForm, showStockItemDetail } from './actions'
import { dispatch$, dispatch, dispatchOnSubmit } from '../dispatch'

export const StockItem = (props) => (
  <li onClick={ dispatch(showStockItemDetail).bind(null, props.state.id) }>
    <h6>{props.state.name}</h6>
  </li>  
)

export const StockItemAdd = (props) => (
  <li>
    <h6 
      onClick={ dispatch(toggleAddItemForm) }>
      Add a new item
    </h6>

    <form 
      style={{ display: props.state.isVisible ? 'block' : 'none' }}
      onSubmit={dispatchOnSubmit(addStockItem)}>
      <input type="text "/>
      <input type="text "/>
      <input type="submit" />
    </form>
  </li>  
)
