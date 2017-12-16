import React, { Component } from 'react'

//Importing Components
import ProductRow from './ProductRow'

class ProductForm extends Component {
  render() {
    const totalProducts = this.props.products
    let items = []
    totalProducts.map((product,i) => {
      // console.log(product.Name)
      return items.push(<ProductRow data={product} key={i} />)
    })

    return (
      <div>
        <span>Hola Mundo</span>
        <hr/>
        <strong>{`Cantidad Total: ${totalProducts.length}`}</strong>
        <br/>
        <br/>
        <center>
        <table border={"1px"}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
        </center>
      </div>
    )
  }
}

export default ProductForm
