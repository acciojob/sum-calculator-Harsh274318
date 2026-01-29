import React from "react";
import "./../styles/App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [sum, setSum] = useState(0);
  function handelsum(e) {
    setSum(sum + +e.target.value);
  }
  // useEffect(() => {

  // }, [sum]);

  return (
    <div>
      {/* Do not remove the main div */}
      <input type="number" onInput={handelsum} />
      <h1>Sum: {sum}</h1>
    </div>
  );
};

export default App;
