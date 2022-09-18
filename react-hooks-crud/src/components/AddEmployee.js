import { Button, Form, FormGroup, Input } from "reactstrap";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const submitNewEmployee = (e) => {
    e.preventDefault();
    addEmployee(newEmployee);
  };
  const onChangeValue = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={submitNewEmployee}>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="Name *"
          required
          onChange={onChangeValue}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="email"
          name="email"
          placeholder="Email *"
          required
          onChange={onChangeValue}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="textarea"
          name="address"
          placeholder="Address"
          onChange={onChangeValue}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={onChangeValue}
        ></Input>
      </FormGroup>
      <Button
        className="btn btn-success w-100 d-block mx-auto"
        data-toggle="modal"
      >
        <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
      </Button>
    </Form>
  );
};
export default AddEmployee;
