import React, { useState } from "react";

const App = () => {
  const sendForm = (e) => {
    e.preventDefault();
    console.log("Sending from", e.target.value.value);
  };

  // random 0 to 2
  // Math.floor(Math.random()*3)

  return (
    <div>
      <form className="inputs" onSubmit={(e) => sendForm(e)}>
        <div className="input">take</div>
        —
        <input className="input" name="value" />—
        <div className="input">taken</div>
      </form>
    </div>
  );
};

export default App;
