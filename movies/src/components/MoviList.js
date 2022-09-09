import React, { Component } from "react";
import Movies from "./Movies";
import { Col, Row } from "reactstrap";

export default class MoviList extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center">
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
