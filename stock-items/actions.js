export const toggleAddItemForm = () => {
  return {
    type: 'TOGGLE_ADD_ITEM_FORM',
    container: 'StockItemsContainer'    
  }
}

export const showStockItems = () => {
  return {
    type: 'SHOW_STOCK_ITEMS',
    container: 'StockItemsContainer'    
  }
}

export const addStockItem = () => {
  return {
    type: 'ADD_STOCK_ITEM',
    container: 'StockItemsContainer',
    stockItem: {
      id: 'ab39zj',
      name: 'test'      
    }
  }
}

export const showStockItemDetail = (id) => {
  return {
    type: 'SHOW_STOCK_ITEM_DETAIL',
    container: 'StockItemsContainer',
    id
  }
}