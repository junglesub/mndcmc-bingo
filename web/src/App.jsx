import { useState } from "react";
import "./App.css";
import { shuffle } from "./tools/shuffle";

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const shuffleNumbers = () => {
    console.log(shuffle(items));
    setItems([...shuffle(items)]);
  };
  return (
    <div className="App">
      <h1 className="title">빙고</h1>
      <table className="mainTable">
        <tr>
          <td className="fill">{items[0]}</td>
          <td>{items[1]}</td>
          <td className="fill">{items[2]}</td>
        </tr>
        <tr>
          <td>{items[3]}</td>
          <td className="fill">{items[4]}</td>
          <td>{items[5]}</td>
        </tr>
        <tr>
          <td className="fill">{items[6]}</td>
          <td>{items[7]}</td>
          <td className="fill">{items[8]}</td>
        </tr>
      </table>
      <div className="buttons">
        <div className="shuffle-btn btn" onClick={() => shuffleNumbers()}>
          섞기
        </div>
      </div>
    </div>
  );
}

export default App;
