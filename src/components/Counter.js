import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "incrementBy5" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const decrementBy5Handler = () => {
    dispatch({ type: "decrementBy5" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={incrementBy5Handler}>incrementBy5</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={decrementBy5Handler}>decrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
