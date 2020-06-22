import React from "react";

const Form = ({ sendForm, RandomVerbs, check, skip, error }) => (
  <form
    className={`Form ${error ? "error" : ""}`}
    onSubmit={(e) => sendForm(e)}
  >
    <div className="input">{RandomVerbs}</div>

    <div className="buttons">
      <button className="check" disabled={error} onClick={() => check()}>
        Check
      </button>
      <button className="skip" disabled={error} onClick={() => skip()}>
        Skip
      </button>
    </div>
  </form>
);

export default Form;
