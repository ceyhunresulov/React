import Employee from "./Employee";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import AddEmployee from "./AddEmployee";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";
import EditEmployee from "./EditEmployee";
import { Alert } from "reactstrap";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const { isOpenEdit } = useContext(EmployeeContext);
  const { closeEditModal } = useContext(EmployeeContext);
  const { showAlert } = useContext(EmployeeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeePageCount] = useState(2);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleShow = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    handleClose();
  }, [employees]);

  const indexLastOfPage = currentPage * employeePageCount;
  const indexFirstOfPage = indexLastOfPage - employeePageCount;
  const employeesPage = employees
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(indexFirstOfPage, indexLastOfPage);
  const totalPages = Math.ceil(employees.length / employeePageCount);
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
      <Alert isOpen={showAlert.isOpen} color="success">
        {showAlert.info}
      </Alert>
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
          <Employee employees={employeesPage}></Employee>
        </tbody>
      </table>

      {/* pagination */}
      <Pagination
        pages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>

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
      <Modal isOpen={isOpenEdit}>
        <ModalHeader>Edit Employee</ModalHeader>
        <ModalBody>
          <EditEmployee></EditEmployee>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeEditModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EmployeeList;
