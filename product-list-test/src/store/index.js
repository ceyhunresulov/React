import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const action = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "INC":
//       return { counter: state.counter + 1 };
//     case "DEC":
//       return { counter: state.counter - 1 };
//     case "INC_BY_TEN":
//       return { counter: state.counter + action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
