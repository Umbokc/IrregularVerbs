import React from "react";

import questionMarkImg from "../../images/question-mark.png";
import closeMarkImg from "../../images/close-mark.png";

const Help = ({ showHelp, setShowHelp }) => (
  <div className="Help">
    <div className={`content ${showHelp ? "active" : ""}`}>
      <p>This app will help you master irregular verbs.</p>
      <p>
        Just type missing word and click 'check' and the app will indicate if
        the choosen word was correct. If you are not sure you can click a 'skip'
        button and you'll get a correct answer
      </p>
      <p>Have fun!</p>
      <img
        src={closeMarkImg}
        alt=""
        className="close"
        onClick={() => setShowHelp(false)}
      />
    </div>
    <img
      className={`question-mark ${showHelp ? "active" : ""}`}
      src={questionMarkImg}
      alt=""
      title="Help"
      onClick={() => setShowHelp(!showHelp)}
    />
  </div>
);

export default Help;
