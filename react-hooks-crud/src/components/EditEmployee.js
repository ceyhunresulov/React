import { Button, Form, FormGroup, Input } from "reactstrap";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditEmployee = () => {
  //   const { name, email, address, phone } = updatedEmployee;
  const { updatedEmployee, updateEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState(updatedEmployee);
  const { id, name, email, address, phone } = newEmployee;
  const editEmployee = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const submitUpdatedEmployee = (e) => {
    e.preventDefault();
    updateEmployee(id, newEmployee);
  };
  return (
    <Form onSubmit={submitUpdatedEmployee}>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="Name *"
          value={name}
          onChange={editEmployee}
          required
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="email"
          name="email"
          placeholder="Email *"
          value={email}
          onChange={editEmployee}
          required
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="textarea"
          name="address"
          placeholder="Address"
          value={address}
          onChange={editEmployee}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={editEmployee}
        ></Input>
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
