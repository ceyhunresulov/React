import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  };
  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div className="App">
        <Container>
          <Row className="bg-dark text-white my-5">
            <Navi />
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
