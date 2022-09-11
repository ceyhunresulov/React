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
  state = {
    sizeAuth: true,
  };
  catString = () => {
    console.log(this.props.movi.overview);
    return (this.props.movi.overview.length > 100) & this.state.sizeAuth
      ? this.props.movi.overview.substring(0, 100) + "..."
      : this.props.movi.overview;
  };
  extendString = () => {
    this.setState({ sizeAuth: !this.state.sizeAuth });
  };
  render() {
    return (
      <Card className="card m-2 p-0">
        <CardImg
          alt="Card image cap"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.props.movi.poster_path}`}
          top
          width="100%"
        />
        <CardBody className="d-flex flex-column justify-content-evenly">
          <CardTitle tag="h5">{this.props.movi.title}</CardTitle>
          <CardText
            className={this.state.sizeAuth ? "card-text" : "card-lg"}
            onClick={this.extendString}
          >
            {this.catString()}
          </CardText>
          <div className="d-flex justify-content-between w-100%">
            <Button
              className="bg-danger"
              onClick={() => this.props.removeCard(this.props.movi.id)}
            >
              Delete
            </Button>
            <CardSubtitle className="p-2 my-auto bg-dark text-white" tag="h6">
              {this.props.movi.vote_average}
            </CardSubtitle>
          </div>
        </CardBody>
      </Card>
    );
  }
}
