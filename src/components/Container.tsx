import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Override.css'

import NavBar from './NavBar';
import Header from './Header';
import InputData from './InputData';
import CalcResults from './CalcResults';
import FinishKey from './FinishKey';

class Container extends Component {

  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleDateIncrement = this.handleDateIncrement.bind(this);
    this.handleDateDecrement = this.handleDateDecrement.bind(this);
    this.state = {
      amount: 0,
      months: 1,
      newMonth: "January",
      newYear: 2020,
    }
  }

  handleValueChange = (event, maskedvalue, floatvalue) => {
    this.setState({ amount: floatvalue });
  },

  handleDateIncrement = (event) => {
    this.setState({ months: this.state.months + 1 });
  },

  handleDateDecrement = (event) => {
    if (this.state.months > 1) {
      this.setState({ months: this.state.months - 1 });
    }
  },


  renderNewDate = (separator = "  ") => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let newDate = new Date();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

    month = (month + this.state.months) % 12;

    year = year + Math.floor((this.state.months + 1) / 12);

    return <spam><strong>{monthNames[month]}</strong>{separator}{year}</spam>;
  },

  render() {
    return (
      <div class="container">
        <div class="mb-4">
          <NavBar />
        </div>
        <div class="card mb-4">
          <div><Header /></div>
          <div>
            <InputData
              onValueChange={this.handleValueChange}
              onDateIncrement={this.handleDateIncrement}
              onDateDecrement={this.handleDateDecrement}
              data={this.state}
              renderNewDate={this.renderNewDate}
            />
          </div>
          <div>
            <CalcResults
              data={this.state}
              renderNewDate={this.renderNewDate}
            />
          </div>
          <div class="m-3"><FinishKey /></div>
        </div>
      </div>
    );
  }

}

export default Container
