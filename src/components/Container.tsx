import React, { Component } from 'react';
import Header from './Header';
import InputData from './InputData';
import CalcResults from './CalcResults';
import FinishKey from './FinishKey';

class Container extends Component {

  constructor(props) {
    super(props);
  }

  render(){
     return (
       <div >
         <Header />
         <InputData />
         <CalcResults />
         <FinishKey />
       </div>
     );
   }

}

export default Container
