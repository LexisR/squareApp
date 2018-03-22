import React, { Component } from 'react';
import './Content.css';

import Products  from './../Products/Products.jsx';
import Forms from './../Forms/Forms';



class Content extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { productsId: 1, productContent: ' Producto 1' },
        { productsId: 2, productContent: ' Producto 2' },
      ]
    };
    this.addProducts = this.addProducts.bind(this);
  }

  removeProducts(){

  }
  addProducts(product){
    let { products } = this.state;
    products.push({
      productsId: products.length + 1,  
      productContent: product
    }) ;
    //debemos actualizar el estado para que funcione
    this.setState({ products })
  }

  render() {
    return (

      <div className='productsContainer'>
        <div className='productsHeader'>
          <h1>Registra tu producto </h1>
        </div>
        <div className='productsBody'>
          <ul>
            {this.state.products.map(products => {
              console.log(products.productContent);
              return (
                <Products 
                  productContent={products.productContent}
                  productsId={products.productsId}
                  key={products.productsId}
                />
              )
            })}
          </ul>
        </div>
        <div className='productsFooter'>
            <Forms addProducts={this.addProducts} />
        </div>
      </div>


    )
  }

}

export default Content;