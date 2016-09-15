export {StockItemsContainer} from './container'
export * from './actions'

import { Observable, Subject } from '@reactivex/rxjs'
import { dispatch$ } from '../dispatch'
import { store$ } from '../store'
import { initialState } from './mockdata'

// CONTAINER ACTION STREAMS
const action$ = dispatch$  
  .filter(action => action.container === 'StockItemsContainer' )


// STATE STREAMS
const list$ = action$    
  .filter(action => action.type === 'ADD_STOCK_ITEM' )  
  .scan((state, action) => (state.concat(action.stockItem)), initialState.list)  
  .startWith(initialState.list)

const activeId$ = action$  
  .filter(action => action.type === 'SHOW_STOCK_ITEM_DETAIL' )
  .scan((state, action) => (action.id), initialState.activeId)
  .startWith(initialState.activeId)

const form$ = action$  
  .filter(action => action.type === 'TOGGLE_ADD_ITEM_FORM')
  .scan((state, action) => ({
    ...state,
    isVisible: !state.isVisible
  }), initialState.addItemForm)
  .startWith(initialState.addItemForm)


// EXPORT CONTAINER STATE STREAM TO ROOT STORE
export const stockItemsState$ = Observable.combineLatest(
  list$,
  form$,
  activeId$,
  (list, form, activeId) => ({ list, form, activeId })
)
