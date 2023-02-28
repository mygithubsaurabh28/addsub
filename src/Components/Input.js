import react, { useState } from "react";
import "./Input.css";

function Input() {
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState("");

  function getValue(event) {
    setResult1(+event.target.value);
  }

  function add() {
    setResult(result + result1);
  }

  function sub() {
    setResult(result - result1);
  }
  return (
    <div id="main">
      <div className="input-form">
        <form>
          <label>Enter a value to add/subtract</label>
          <br></br>
          <input class="txtv" onChange={getValue} type="text" />
        </form>
      </div>
      <div className="add">
        <button id="btnadd" onClick={add}>
          Add
        </button>
      </div>

      <div className="sub">
        <button id="btnsub" onClick={sub}>
          Subtract
        </button>
      </div>

      <div className="outp">
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default Input;
