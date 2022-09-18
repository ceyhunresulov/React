import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Tooltip } from "reactstrap";

const Employee = ({ employees }) => {
  const { removeEmployee } = useContext(EmployeeContext);
  const { showEditModal } = useContext(EmployeeContext);
  const [isOpenTool, setIsOpenTool] = useState(true);
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
              onClick={() => showEditModal(emp)}
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
            <span>
              <button
                id="ToolTip"
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
                  id="tooltip"
                >
                  &#xE872;
                </i>
              </button>
              <Tooltip
                isOpen={true}
                placement="top"
                target="Tooltip"
                toggle={() => setIsOpenTool(!isOpenTool)}
              >
                tool
              </Tooltip>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};
export default Employee;
