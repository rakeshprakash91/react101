import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const selector = useSelector((state) => {
    return state.customCounter.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      Current balance is: {selector}
      <div>
        <button
          onClick={() => {
            dispatch(increment(1000));
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch(decrement(1000));
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
export default App;
