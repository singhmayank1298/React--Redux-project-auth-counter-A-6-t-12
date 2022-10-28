import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const incrementBy5Handler = () => {
    dispatch(counterAction.increase(10)); // by default payload is set by redux toolkit
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const decrementBy5Handler = () => {
    dispatch({ type: "decrementBy5" }); // it like sending argumment
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={incrementBy5Handler}>incrementBy5</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={decrementBy5Handler}>decrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
