import Employee from "./Employee";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import AddEmployee from "./AddEmployee";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleShow = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees}></Employee>
        </tbody>
      </table>
      <Modal isOpen={isOpen}>
        <ModalHeader>Add Employee</ModalHeader>
        <ModalBody>
          <AddEmployee />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      {/* edit */}
      <Modal>
        <ModalHeader>Edit Employee</ModalHeader>
        <ModalBody>
          <h1>Edit</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EmployeeList;
