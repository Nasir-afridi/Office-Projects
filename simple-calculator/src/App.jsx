import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };  
  
  const calculate = () => {
  try {
    setValue(eval(value).toString());
  } catch {
    setValue("Error");
  }
};

  const clear = () => setValue("");

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "320px" }}>
          <input
            type="text"
            className="form-control text-end fs-4 mb-3"
            placeholder="0"
            value={value}
            readOnly
          />

          <div className="row g-2">
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("7")}>7</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("8")}>8</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("9")}>9</button></div>
            <div className="col-3"><button className="btn btn-warning w-100" onClick={() => handleClick("/")}>/</button></div>

            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("4")}>4</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("5")}>5</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("6")}>6</button></div>
            <div className="col-3"><button className="btn btn-warning w-100" onClick={() => handleClick("*")}>*</button></div>

            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("1")}>1</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("2")}>2</button></div>
            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("3")}>3</button></div>
            <div className="col-3"><button className="btn btn-warning w-100" onClick={() => handleClick("-")}>-</button></div>

            <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleClick("0")}>0</button></div>
            <div className="col-3"><button className="btn btn-danger w-100" onClick={clear}>C</button></div>
            <div className="col-3"><button className="btn btn-success w-100" onClick={calculate}>=</button></div>
            <div className="col-3"><button className="btn btn-warning w-100" onClick={() => handleClick("+")}>+</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;