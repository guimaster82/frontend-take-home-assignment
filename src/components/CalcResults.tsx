import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

class CalcResults extends Component {
  constructor(props) {
    super(props)
  }

calculateValue() {
  let value = this.props.data.amount;
  let monts = this.props.data.months;

  value = value / monts;
  return value.toFixed(0);
}

  render(){
     return (
       <div class="card m-3 mb-4">
       <div class="row">
         <div class="col leftAlign">
          <strong>Monthly amount</strong>
         </div>
         <div class="col rightAlign">
          <h1><CurrencyFormat value={this.calculateValue()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
         </div>
       </div>
         <div class="card-header">
        You are planning <strong>{this.props.data.months} monthly deposits </strong> to reach your <strong><CurrencyFormat value={this.calculateValue()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong> goal by {this.props.renderNewDate()}
        </div>
       </div>
     );
   }
}

export default CalcResults
