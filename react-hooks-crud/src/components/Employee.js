import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button } from "reactstrap";

const Employee = ({ employees }) => {
  const { removeEmployee } = useContext(EmployeeContext);
  return (
    <>
      {employees.map((emp) => (
        <tr key={emp.id}>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.address}</td>
          <td>{emp.phone}</td>
          <td className="d-flex">
            <Button
              size="sm"
              color="success"
              className="edit"
              data-toggle="modal"
            >
              <i
                className="material-icons d-block my-auto"
                data-toggle="tooltip"
                title="Edit"
              >
                &#xE254;
              </i>
            </Button>
            <Button
              onClick={() => removeEmployee(emp.id)}
              size="sm"
              color="danger"
              className="delete ms-2"
              data-toggle="modal"
            >
              <i
                className="material-icons d-block my-auto"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};
export default Employee;
