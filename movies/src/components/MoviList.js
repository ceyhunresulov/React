import React, { Component } from "react";
import Movies from "./Movies";
import { Row } from "reactstrap";

export default class MoviList extends Component {
  render() {
    return (
      <Row className="flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center m-0">
        {this.props.moviList.map((movi) => (
          <Movies
            removeCard={this.props.removeCard}
            key={movi.id}
            movi={movi}
          ></Movies>
        ))}
      </Row>
    );
  }
}
