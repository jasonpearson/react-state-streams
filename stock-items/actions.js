import uuid from 'uuid'


export const toggleAddItemForm = () => ({
  type: 'TOGGLE_ADD_ITEM_FORM',
  container: 'StockItemsContainer'    
})

export const submitAddItemForm = (payload) => ({
  type: 'SUBMIT_ADD_ITEM_FORM',
  container: 'StockItemsContainer',
  stockItem: {
    ...payload,
    id: uuid.v4()      
  }        
})

export const showStockItems = () => ({
  type: 'SHOW_STOCK_ITEMS',
  container: 'StockItemsContainer'    
})

export const showStockItemDetail = (payload) => ({
  type: 'TOGGLE_ITEM_DETAIL',
  container: 'StockItemsContainer',
  id: payload.id
})