import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [showAlert, setShowAlert] = useState({ isOpen: false, info: "" });
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
    },
  ]);
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: uuidv4(), ...newEmployee }]);
    showAlertBox("new employee successfully added");
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((em) => em.id !== id));
    showAlertBox("employee successfully removed");
  };

  // is Open Edit
  const showEditModal = (newEmployee) => {
    setIsOpenEdit(true);
    setUpdatedEmployee(newEmployee);
  };
  const closeEditModal = () => {
    setIsOpenEdit(false);
  };
  // edit employee

  const updateEmployee = (id, newEmployee) => {
    setEmployees(employees.map((emp) => (emp.id === id ? newEmployee : emp)));
    showAlertBox("employee successfully updated");
  };
  useEffect(() => {
    closeEditModal();
  }, [employees]);

  // alert box
  const showAlertBox = (messaje) => {
    setShowAlert({ isOpen: true, info: messaje });
    setTimeout(() => {
      setShowAlert({ isOpen: false, info: messaje });
    }, 3000);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        removeEmployee,
        showEditModal,
        isOpenEdit,
        updatedEmployee,
        closeEditModal,
        updateEmployee,
        showAlert,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
export default EmployeeContextProvider;
