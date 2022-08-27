import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };
  removeCart = (id) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== id);
    this.setState({ cart: newCart });
  };
  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div className="App">
        <Container>
          <Row className="bg-dark text-white my-5 py-3">
            <Navi cart={this.state.cart} removeCart={this.removeCart} />
          </Row>
          <Row>
            <Col xs="4" className="bg-secondary">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="8" className="border">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
