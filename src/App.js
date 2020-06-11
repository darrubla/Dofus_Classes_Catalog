import React from "react";
import "./App.css";
import Clase from "./views/Clase";

function App() {
  const arrId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(arrId);
  console.log(arrId);
  return (
    <div>
      <div className="App">
        <Clase children={arrId[0]} />
        <Clase children={arrId[1]} />
        <Clase children={arrId[2]} />
        <Clase children={arrId[3]} />
        <Clase children={arrId[4]} />
      </div>
      <div className="App">
        <Clase children={arrId[5]} />
        <Clase children={arrId[6]} />
        <Clase children={arrId[7]} />
        <Clase children={arrId[8]} />
        <Clase children={arrId[9]} />
      </div>
      <div className="App">
        <Clase children={arrId[10]} />
        <Clase children={arrId[11]} />
        <Clase children={arrId[12]} />
        <Clase children={arrId[13]} />
        <Clase children={arrId[14]} />
      </div>
      <div className="App">
        <Clase children={arrId[15]} />
        <Clase children={arrId[16]} />
        <Clase children={arrId[17]} />
      </div>
    </div>
  );
}

export default App;
