import React from 'react'
import { StockItemsList } from './list'
import { dispatch } from '../dispatch'

export class StockItemsContainer extends React.Component {
  render() {
    return (
      <div>
        
        <StockItemsList state={this.props.state} />

        {/* DEBUG
        <code>
          <h6>StockItemsState - list:</h6>
          <p>{JSON.stringify(this.props.state.list)}</p>

          <h6>StockItemsState - ui:</h6>
          <p>{JSON.stringify(this.props.state.ui)}</p>
        </code>
        */}        
      </div>
    )
  }
}