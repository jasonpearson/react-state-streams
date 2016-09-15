import { Observable } from '@reactivex/rxjs'
import { stockItemsState$ } from './stock-items/index'
import {dispatch$} from './dispatch'

export const store$ = Observable.combineLatest(
  stockItemsState$,
  (stockItemsState) => ({stockItemsState})
)