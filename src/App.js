import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ac } from "./state";

function App() {
  const accountState = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(ac, dispatch);
  return (
    <div>
      Current balance is: {accountState}
      <div>
        <button
          onClick={() => {
            depositMoney(1000);
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            withdrawMoney(1000);
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
export default App;
