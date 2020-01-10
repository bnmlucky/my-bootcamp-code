import React, { Component } from 'react'

class MyProducts extends Component {
  render() {
    return (
      <div className='my-products'>
        {this.props.products.map((product, index) => {
          return (
            <p onClick={() => this.props.addToCart(product)} key={index}>
              {product.name}
            </p>
          )
        })}
      </div>
    )
  }
}

export default MyProducts
