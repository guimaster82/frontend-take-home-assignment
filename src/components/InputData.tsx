import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

class InputData extends Component {
  constructor(props) {
    super(props)
  }

  render(){
     return (
       <form>
         <div class="input-group">
           <div class="col">
            <strong>Total amount</strong>
             <div class="input-group">
               <div class="input-group-prepend">
                 <span class="input-group-text" id="basic-addon1">$</span>
               </div>
                   <CurrencyInput class="form-control" onChangeEvent={this.props.onValueChange} value={this.props.data.amount} precision="0"/>
             </div>
           </div>
           <div class="col">
            <strong>Reach Goal By</strong>
             <div class="input-group">
               <div class="input-group-prepend">
               <button onClick={this.props.onDateDecrement} class="btn btn-secondary" type="button" id="button-addon1">{`<`}</button>
               </div>
               <span class="form-control">{this.props.renderNewDate()}</span>
               <div class="input-group-append">
               <button onClick={this.props.onDateIncrement} class="btn btn-secondary" type="button" id="button-addon1">{`>`}</button>
               </div>
             </div>
           </div>
         </div>
       </form>
     );
   }
}

export default InputData
