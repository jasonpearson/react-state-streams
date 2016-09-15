import { Observable } from '@reactivex/rxjs'
import { store$ } from './store'

import { renderRootContainer } from './root'
import { StockItemsContainer } from './stock-items/index'

import './styles.scss'

store$
  // .do(v => console.log(v))
  .subscribe(renderRootContainer)
  