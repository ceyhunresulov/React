import Counter from "./components/Counter";
import Decrease from "./components/Decrease";
import Increase from "./components/Increase";
import IncreaseByTwo from "./components/IncreaseByTwo";

function App() {
  return (
    <div>
      <Counter />
      <Increase></Increase>
      <Decrease></Decrease>
      <IncreaseByTwo></IncreaseByTwo>
    </div>
  );
}

export default App;
