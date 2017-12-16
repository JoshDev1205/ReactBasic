import React, { Component } from 'react'

class ProductRow extends Component {
  render() {    
    return(
      <tr>
        <td>{ this.props.data.Name }</td>
        <td>{ this.props.data.Price }</td>
      </tr>
    )
  }
}

export default ProductRow