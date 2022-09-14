import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  static defaultProps = {
    test: "ne var ne yox",
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res }));
  };

  render() {
    return (
      <div>
        <h2 className="text-white">{this.props.test}</h2>
        <ListGroup className="py-3">
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                this.props.currentCategory === category.categoryName
                  ? true
                  : false
              }
              key={category.id}
              onClick={() => this.props.changeCategory(category)}
            >
              {category.id} {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

CategoryList.propTypes = {
  test: PropTypes.string,
};
