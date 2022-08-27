import React, { Component } from "react";
import CartSummary from "./CartSummary";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand className="text-white" href="/">
            Navi
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/" className="text-white">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-white"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeCart={this.props.removeCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
