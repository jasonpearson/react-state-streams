import React from 'react'
import { StockItemsList } from './list'
import { dispatch } from '../dispatch'

export class StockItemsContainer extends React.Component {
  render() {
    return (
      <div>
        <StockItemsList state={this.props.state} />
        <code>
          <h6>StockItemsState - list:</h6>
          <p>{JSON.stringify(this.props.state.list)}</p>

          <h6>StockItemsState - form:</h6>
          <p>{JSON.stringify(this.props.state.form)}</p>

          <h6>StockItemsState - activeId:</h6>
          <p>{JSON.stringify(this.props.state.activeId)}</p>
        </code>        
      </div>
    )
  }
}