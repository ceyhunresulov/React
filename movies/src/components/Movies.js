import React, { Component } from "react";
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  Card,
  CardText,
  Button,
  CardImg,
} from "reactstrap";

export default class Movies extends Component {
  render() {
    return (
      <Card className="w-25 m-2 p-0">
        <CardImg
          alt="Card image cap"
          src={this.props.movi.imageURL}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{this.props.movi.name}</CardTitle>
          <CardText>{this.props.movi.overview}</CardText>
          <div className="d-flex justify-content-between w-100%">
            <Button
              className="bg-danger"
              onClick={() => this.props.removeCard(this.props.movi.id)}
            >
              Delete
            </Button>
            <CardSubtitle className="p-2 my-auto bg-dark text-white" tag="h6">
              {this.props.movi.rating}
            </CardSubtitle>
          </div>
        </CardBody>
      </Card>
    );
  }
}
