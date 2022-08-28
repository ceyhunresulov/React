import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>category id</th>
              <th>product name</th>
              <th>quantity</th>
              <th>unit price</th>
              <th>units in itock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cart) => (
              <tr key={cart.product.id}>
                <td>{cart.product.id}</td>
                <td>{cart.product.categoryId}</td>
                <td>{cart.product.productName}</td>
                <td>{cart.product.quantityPerUnit}</td>
                <td>{cart.product.unitPrice}</td>
                <td>{cart.product.unitsInStock}</td>
                <td>
                  <Button
                    color="secondary"
                    onClick={() => this.props.removeCart(cart.product.id)}
                  >
                    del
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return this.renderCart();
  }
}
