import React from 'react'
import classNames from 'classnames'
import { Observable } from '@reactivex/rxjs'
import { toggleAddItemForm, showStockItemDetail, submitAddItemForm } from './actions'
import { dispatch$, dispatch, dispatchOnSubmit } from '../dispatch'



export const StockItem = (props) => (
  <li
    className={classNames({
      active: props.ui.activeId === props.item.id && !props.ui.addItemFormVisible
    })} 
    onClick={ dispatch(showStockItemDetail, {id: props.item.id}) }>
    <h6>{props.item.name}</h6>
    <div className="item-detail-content">
      <p>{props.item.description ? props.item.description :
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis nihil adipisci repellendus voluptatem laudantium similique quisquam sit earum dolore nostrum soluta reiciendis aspernatur ducimus blanditiis rerum, esse ut? Vero?'  
      }</p>

      <div className="item-detail-cards">
      
        <div className="card text-xs-center">
          <h6 className="card-header">Price</h6>
          <div className="card-block">
            <h4 className="card-title">{props.item.price ? '$' + props.item.price : 'Unknown'}</h4>            
          </div>
        </div>      

        <div className="card text-xs-center">
          <h6 className="card-header">Available Date</h6>
          <div className="card-block">
            <h4 className="card-title">{props.item.date ? props.item.date : 'Unknown'}</h4>
          </div>
        </div>      

        <div className="card text-xs-center">
          <h6 className="card-header">Taxable</h6>
          <div className="card-block">
            <h4 className="card-title">{props.item.taxable ? 'Yes' : 'No'}</h4>
          </div>
        </div>            
      </div>

    </div>
  </li>  
)

export class StockItemAdd extends React.Component {
  constructor(props) {
    super(props)
    this.controls = []
  }

  componentDidMount() {
    const form$ = Observable.from(this.controls)
      .map(control => Observable.fromEvent(control, 'keydown'))
      .mergeAll()
      .map(e => ({ value: e.currentTarget.value, name: e.currentTarget.name }))
      .scan((state, control) => ({ ...state, [control.name]: control.value }), {})          

    const submit$ = Observable.fromEvent(this.formRef, 'submit')
      .do(e => e.preventDefault())
      .do(() => {
        this.controls.forEach(c => {
          if (c) c.value = ''          
        })
      })
      .withLatestFrom(form$, (e, form) => form)
      .subscribe(form => dispatch(submitAddItemForm, form)())
  }

  addControl(ref) {
    this.controls.push(ref)
  }

  render() {
    return (
      <li className={classNames({active: this.props.ui.addItemFormVisible})}>
        <h6>Add Stock Item <span className="text-success">&#43;</span></h6>

        <div className="close-form" onClick={ dispatch(toggleAddItemForm) }>x</div>

        <form ref={r => this.formRef = r}>          
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input ref={this.addControl.bind(this)} name="name" type="text" className="form-control" id="formGroupExampleInput" placeholder="The name of the Stock Item to be added" />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleTextarea">Description</label>
            <textarea ref={this.addControl.bind(this)} name="description" className="form-control" id="exampleTextarea" rows="3" placeholder="A description of the Stock Item"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputAmount">Price</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref={this.addControl.bind(this)} name="price" type="text" className="form-control" id="exampleInputAmount" placeholder="How much the customer pays for the Stock Item" />
              <div className="input-group-addon">.00</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="example-date-input" className="col-form-label">Available Date</label>        
            <input ref={this.addControl.bind(this)} name="date" className="form-control" type="date" id="example-date-input" placeholder="When this Stock Item is available within the store." />        
          </div>

          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input ref={this.addControl.bind(this)} name="taxable" className="form-check-input" type="checkbox" />
                Taxable? <small>(Whether or not the Stock Item has tax applied when purchased)</small>
              </label>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>      
        </form>

        <div className="facade" onClick={dispatch(toggleAddItemForm)}></div>
      </li>      
    )
  }
}
