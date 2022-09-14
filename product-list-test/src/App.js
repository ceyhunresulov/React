import { useSelector, useDispatch } from "react-redux";
import { action } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increament = () => {
    dispatch(action.increment());
  };
  const decreament = () => {
    dispatch(action.decrement());
  };
  const addBy = () => {
    dispatch(action.addBy(10));
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={addBy}>increamentByTen</button>
    </div>
  );
}

export default App;
