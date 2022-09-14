import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryAction from "../../redux/actions/categoryAction";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.action.getCategories();
  }
  render() {
    return (
      <div>
        <h2>
          <Badge color="dark">Categories</Badge>
        </h2>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.category.id}
              onClick={() => this.props.action.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: {
      getCategories: bindActionCreators(categoryAction.getCategories, dispatch),
      changeCategory: bindActionCreators(
        categoryAction.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
