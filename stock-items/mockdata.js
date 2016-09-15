export const initialState = {
  activeId: null,
  list: [
    {
      id: 1,
      name: 'item 1',
      description: 'lorem ipsum',
      availDate: new Date(),
      taxable: true
    },
    {
      id: 2,
      name: 'item 2',
      description: 'lorem ipsum',
      availDate: new Date(),
      taxable: true
    }
  ],
  addItemForm: { 
    isVisible: false 
  }    
}