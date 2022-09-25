import React from "react";

import "./BottomWords.scss";
import sampleImg from "../sample.jpg";
import WordTable from "./WordTable";

function BottomWords() {
  return (
    <div className="BottomWords">
      <div className="lastword">
        <div className="head">마지막으로 나온 단어</div>
        <div className="word">해결</div>
        <div className="pto">
          <img src={sampleImg} />
        </div>
      </div>

      <h1 className="title">단어</h1>
      <WordTable />
    </div>
  );
}

export default BottomWords;
