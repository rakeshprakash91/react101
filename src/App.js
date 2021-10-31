function App() {
  return (
    <div>
      Current balance is: {0}
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
