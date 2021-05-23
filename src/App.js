import React, { useState } from 'react';

function App() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');

  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"];

  const operators = ['+', '-', '/', '*'];

  const increaseInput = (event) => {
    setInput(input + event.target.value);
  };

  const calculate = () => {
    try {
      setInput(
        String(eval(input)).length > 3 &&
          String(eval(input)).includes(".")
          ? String(eval(input).toFixed(4))
          : String(eval(input))
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper">
      <div className="show-input">{input}</div>
      <div className="digits flex">
        {digits.map(digit => (
          <button
            key={digit}
            value={digit}
            onClick={increaseInput}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="operations subgrid">
        {operators.map(operator => (
          <button
            key={operator}
            value={operator}
            onClick={increaseInput}
          >
            {operator}
          </button>
        ))}
        <button
          onClick={calculate}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
