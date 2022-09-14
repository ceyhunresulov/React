import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Dashboard></Dashboard>
    </Container>
  );
}

export default App;
