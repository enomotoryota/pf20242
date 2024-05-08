import { useState } from "react";
import "../AI/Al.css";

function Ai() {
  const textS = [
    "鳥",
    "牛",
    "思い出",
    "恋人",
    "授業",
    "掃除機",
    "ラムネ",
    "チクワ",
    "稲葉浩志",
    "縄跳び",
    "水分",
    "口実",
    "見栄え",
    "後ろ髪",
    "スプレー",
    "Github",
    "King Gnu",
    "桑田佳祐",
    "男梅",
    "前世",
    "上司",
    "キッコロ",
    "眠気",
  ];

  const textV = [
    "思い出した",
    "洗い出した",
    "有耶無耶にした",
    "踊り出した",
    "近づいた",
    "見え隠れした",
    "アタックした",
    "握った",
    "散歩した",
    "ノイズキャンセルした",
    "掃除した",
    "満ちた",
    "信じた",
    "抱きしめた",
    "スイムスイム",
    "もふもふした",
    "乾燥した",
    "あんなことするなんて・・・",
    "背を向けた",
    "掃除した",
    "筋トレした",
    "いる気がする",
  ];
  const [randomTextS, setRandomTextS] = useState("");
  const [randomTextV, setRandomTextV] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleButton = () => {
    const randomIndexS = Math.floor(Math.random() * textS.length);
    setRandomTextS(textS[randomIndexS]);

    const randomIndexV = Math.floor(Math.random() * textV.length);
    setRandomTextV(textV[randomIndexV]);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value); // 入力値を更新
    alert("決まった言い訳を変えようと思うなよ");
    console.log(inputValue);
  };

  return (
    <div>
      <div className="Ai">
        <section className="AiSection">
          <div className="AiSection-contents">
            <h1>AI</h1>
            <h2>あしたのいいわけ</h2>
            <p>悩まずに済むよ！</p>
          </div>
          <div className="AiSection-function">
            <button type="button" onClick={handleButton}>
              押してみて！
            </button>
            <div className="AiSection-functions">
              <input
                className="AiSection-right"
                type="text"
                value={randomTextS}
                onChange={handleInputChange}
              />
              <p>が</p>
              <input
                className="AiSection-left"
                type="text"
                value={randomTextV}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ai;
