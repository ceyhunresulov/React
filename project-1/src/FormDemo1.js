import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo1 extends Component {
  state = { email: "", password: "", description: "", city: "" };
  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  onChangeSubmit = (e) => {
    e.preventDefault();
    [...e.target.parentElement.children].forEach((element) => {
      element.lastChild.value = "";
    });
    alertify.success(this.state.email + " add to db");
    alertify.success(this.state.password + " add to db");
    alertify.success(this.state.description + " add to db");
    alertify.success(this.state.city + " add to db");
  };
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="text"
              name="text"
              id="text"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandler}
            >
              <option>Baku</option>
              <option>Sumqayit</option>
              <option>Ganja</option>
              <option>Quba</option>
              <option>Lenkeran</option>
            </Input>
          </FormGroup>
          <Button type="Submit" onClick={this.onChangeSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
