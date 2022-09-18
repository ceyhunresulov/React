import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList></EmployeeList>
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
