import { Subject, Observable } from '@reactivex/rxjs'
import { store$ } from './store'

export const dispatch$ = new Subject()

export const dispatch = (actionCreator) => {
  return (id) => {
    dispatch$.next( actionCreator(id) )
  }
}

export const dispatchOnSubmit = (actionCreator) => {
  return (e) => {
    e.preventDefault()
    dispatch$.next( actionCreator() )
  }
}