import { Subject, Observable } from '@reactivex/rxjs'
import { store$ } from './store'

export const dispatch$ = new Subject()

export const dispatch = (actionCreator, payload) => {
  return function(e) {
    dispatch$.next( actionCreator(payload) )
  }
}

export const dispatchOnSubmit = (actionCreator) => {
  return (e) => {
    dispatch$.next( actionCreator(e.currentTarget) )
  }
}