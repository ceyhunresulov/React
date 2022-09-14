import React, { Component } from "react";
import { Badge } from "reactstrap";
import { connect, Connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">
          <Badge color="success">{this.props.category.categoryName}</Badge>
        </h2>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.changeCategoryReducer,
  };
}
export default connect(mapStateToProps)(ProductList);
