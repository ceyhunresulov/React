import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class SearchBar extends Component {
  state = {
    searchMovi: "",
  };
  render() {
    return (
      <Form
        className="mt-4 w-75"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.findMovi(this.state.searchMovi);
        }}
      >
        <FormGroup>
          <Input
            type="text"
            name="text"
            id="exampleText"
            placeholder="Search movies"
            onChange={(e) => this.setState({ searchMovi: e.target.value })}
          />
        </FormGroup>
      </Form>
    );
  }
}
