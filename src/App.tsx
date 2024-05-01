import React, { useEffect, useState } from "react";
import Confetti from "canvas-confetti";
import "./App.css";
import { msg } from "./msg";
import oneCoin from "./img/Remove-bg.ai_1713877197022.png";

function App() {
  const [congratulations, setCongratulations] = useState(
    "тут буде текст привітання"
  );

  useEffect(() => {
    document.title = "Happy Birthday";
  }, []);

  const handleClick = async () => {
    Confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const rnd = Math.floor(Math.random() * 85);

    setCongratulations(msg[rnd]);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>З днем народження!</h1>
        </header>
        <main className="main">
          <p className="main__text1">
            Ця апка генерує привітання при кліці на кнопку нижче, спробуй!
            <br />
            (замість тисячі привітаннь)
          </p>
          <button
            id="emitter"
            className="main__button button-1"
            onClick={() => handleClick()}
          >
            Привітання!
          </button>

          <div className="main__text">
            <p className="main__text-text">{congratulations}</p>
          </div>

          <div>
            <img src={oneCoin} alt="копійка" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
