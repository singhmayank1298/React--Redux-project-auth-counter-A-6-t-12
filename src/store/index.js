import { createSlice, configureStore } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { createStore } from "redux"; //1

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // the payload is default property
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuthentication: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   //3
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter, // we have to return all state we maintened because it is a state it is returni new value
//     };
//   }
//   if (action.type === "incrementBy5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrementBy5") {
//     return {
//       counter: state.counter - 5,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer); //2
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions; // importent it send reduser methods
export const authAction = authSlice.actions;
export default store; // 4
