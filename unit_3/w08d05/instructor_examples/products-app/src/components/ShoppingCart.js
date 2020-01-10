import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    return (
      <div className='shopping-cart'>
        {this.props.cart.map((cartItem, index) => {
          return (
            <div
              onClick={() => this.props.deleteFromCart(cartItem.name)}
              key={index}
            >
              <h1>{cartItem.name}</h1>
              <p>{cartItem.price}</p>
              <p>{cartItem.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ShoppingCart
