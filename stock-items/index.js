export {StockItemsContainer} from './container'

import { Observable, Subject } from '@reactivex/rxjs'
import { dispatch$ } from '../dispatch'
import { store$ } from '../store'
import { formUiReducer, activeItemReducer, submitItemReducer } from './reducers'
import { initialState } from './data'


const action$ = dispatch$    
  .filter(action => action.container === 'StockItemsContainer' )

export const stockItemsState$ = Observable.merge(
  action$
    .filter(action => action.type === 'TOGGLE_ADD_ITEM_FORM')
    .scan(formUiReducer, { ui: initialState.ui }),    

  action$
    .filter(action => action.type === 'TOGGLE_ITEM_DETAIL')
    .scan(activeItemReducer, { ui: initialState.ui }),

  action$    
    .filter(action => action.type === 'SUBMIT_ADD_ITEM_FORM' )        
    .scan(submitItemReducer, { list: initialState.list })
)

.scan((state, lastEmitted) => ({  
  ...state,
  ...lastEmitted  
}), initialState)

.startWith(initialState)
