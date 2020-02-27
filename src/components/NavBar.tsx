import React, { Component } from 'react';
import Arrow from '../icons/arrow.svg';

class Navbar extends Component {

  render() {
    return (
      <div>
        <button class="btn-backCustom">
          <Arrow width="7px" height="19px" />
        </button>
        <span class="m-5 blueCustom">Let&apos;s plan your <strong>saving goal.</strong></span>
      </div>
    );
  }
}

export default Navbar
