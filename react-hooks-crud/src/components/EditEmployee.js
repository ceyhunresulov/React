import { Button, Form, FormGroup, Input } from "reactstrap";
// import { useContext, useState } from "react";
// import { EmployeeContext } from "../contexts/EmployeeContext";

const EditEmployee = ({ updatedEmployee }) => {
  //   const { name, email, address, phone } = updatedEmployee;

  return (
    <Form>
      <FormGroup>
        <Input type="text" name="name" placeholder="Name *" required></Input>
      </FormGroup>

      <FormGroup>
        <Input type="email" name="email" placeholder="Email *" required></Input>
      </FormGroup>

      <FormGroup>
        <Input type="textarea" name="address" va placeholder="Address"></Input>
      </FormGroup>

      <FormGroup>
        <Input type="text" name="phone" placeholder="Phone"></Input>
      </FormGroup>
      <Button
        className="btn btn-success w-100 d-block mx-auto"
        data-toggle="modal"
      >
        <i className="material-icons">&#xE147;</i> <span>Edit Employee</span>
      </Button>
    </Form>
  );
};
export default EditEmployee;
