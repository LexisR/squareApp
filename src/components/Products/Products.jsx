import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    const { productContent, productsId } = props;
    console.log()
    this.state = {
      productContent,
      productsId,
    };
    // Tenerlo asi seria una propiedad de la clase y no parte
    // state, por lo que react NO va a REACCionar a los cambios
    // de estado, ya que NO hay estado
    //this.productsContent = props.productsContent; 
    //this.productsId = props.productsId;
  }

  handleRemove (id){
 
    alert('remove:',id)
  }

  render() {
    return (
      <div className='Products'>
        <p>
          <span 
          onClick={() => this.handleRemove(this.productsId)}
          >&times;</span>
        </p>
        <p>
          {this.state.productContent}
        </p>
      </div>
    )
  }
}


export default Products;