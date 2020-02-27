import React, { Component } from 'react';
import Academy from '../icons/academy.svg'


class Header extends Component {
  render() {
    return (
      <div class="card-body">
        <Academy width="40px" height="20px" />
        <h4 class="my-0 font-weight-normal"><strong>Go to College</strong></h4>
        <p class="font-weight-small text-muted">Saving Goal</p>
      </div>
    );
  }
}

export default Header
