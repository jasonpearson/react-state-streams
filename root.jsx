import React from 'react'
import ReactDOM from 'react-dom'
import { StockItemsContainer } from './stock-items/index'


export class RootContainer extends React.Component {    
  render() {
    return (<StockItemsContainer state={this.props.store.stockItemsState} />)   
  }
}

export function renderRootContainer(store) {
  ReactDOM.render(<RootContainer store={store} />, document.getElementById('root'))
}