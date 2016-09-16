
export const formUiReducer = (state, action) => ({
  ui: {
    addItemFormVisible: !state.ui.addItemFormVisible,
    activeId: null
  }
})

export const activeItemReducer = (state, action) => ({
  ui: {
    activeId: action.id !== state.ui.activeId ? action.id : null,
    addItemFormVisible: false,
  }
})

export const submitItemReducer = (state, action) => ({   
  list: [...state.list, action.stockItem],
  ui: { addItemFormVisible: false }
})