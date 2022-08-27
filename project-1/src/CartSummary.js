import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="text-white" nav caret>
            Your Cart - {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  color="danger"
                  className="m-2"
                  onClick={() => this.props.removeCart(cartItem.product.id)}
                >
                  X
                </Badge>
                {cartItem.product.productName}
                <Badge color="success" className="m-2">
                  {cartItem.quantity}
                </Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
  emptySummary() {
    return (
      <NavItem>
        <NavLink className="text-white">Empty cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return this.props.cart.length > 0
      ? this.renderSummary()
      : this.emptySummary();
  }
}
