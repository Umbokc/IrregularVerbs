import React, { useState, useEffect } from "react";

import ListOfIrregularVerbs from "./data/IrregularVerbs.json";

import goodSound from "./sounds/sound_success.mp3";
import baddSound from "./sounds/sound_failure.mp3";

import "./scss/main.css";

import Form from "./components/Form/Form";
import Help from "./components/Help/Help";

const App = () => {
  const [randomVerb, setRandomVerb] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [text, setText] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [error, setError] = useState(false);

  const sendForm = (e) => e.preventDefault();

  const generateSet = () => {
    const random = Math.floor(Math.random() * ListOfIrregularVerbs.length);
    const randomVerb = ListOfIrregularVerbs[random];
    const randomWord = Math.floor(Math.random() * 3);
    setRandomVerb(randomVerb);
    setRandomWord(randomWord);
    setText("");
  };

  useEffect(() => {
    generateSet();
  }, []);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play();
  };

  const check = () => {
    if (randomVerb[randomWord].includes(text.toLowerCase())) {
      generateSet();
      playSound(goodSound);
    } else {
      setError(true);
      setText(randomVerb[randomWord]);
      setTimeout(() => {
        generateSet();
        setError(false);
      }, 4000);
      playSound(baddSound);
    }
  };

  const skip = () => {
    setError(true);
    setText(randomVerb[randomWord]);
    setTimeout(() => {
      generateSet();
      setError(false);
    }, 4000);
    playSound(baddSound);
  };

  const RandomVerbs = [0, 1, 2, 3].map((x) =>
    randomWord === x ? (
      <input
        type="text"
        className={error ? "error" : ""}
        key={x}
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    ) : (
      <span key={x}>{(randomVerb[x] || []).join(', ')}</span>
    )
  );

  return (
    <div className="App">
      <Form
        sendForm={sendForm}
        RandomVerbs={RandomVerbs}
        check={check}
        skip={skip}
        error={error}
      />
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />

      {/* Features to implement

        write game instructions
        mobile test
      */}
    </div>
  );
};

export default App;
