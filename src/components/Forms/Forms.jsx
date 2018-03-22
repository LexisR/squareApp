import React, { Component } from 'react';
import './Forms.css';

class Forms extends Component {
  constructor() {
    super();
    this.addProducts = this.addProducts.bind(this);
  }

  addProducts(){
    this.props.addProducts(this.textInput.value)
    this.textInput.value = ' ';
    this.textInput.focus();
  }

  render() {
    return (

      <div className='Form'>
        <input
          ref={input => {this.textInput = input;}}
          placeholder='Registra tu priducto'
          type="text" />
        <button
          onClick={this.addProducts}
        >
          Agrega un producto</button>
      </div>
    )

  }
}


export default Forms;