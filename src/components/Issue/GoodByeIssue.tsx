import { useEffect, useState } from "react";
import "./GoodByeIssue.css";

function GoodByeIssue() {
  const [text, setText] = useState(""); // 表示されるテキストを管理するstate
  const goodbyeText =
    "さよよならあいしたあなたはもういない、わかってるふたりはもどらない　ここれからぼくらはちがったものがたりをつづるおたがいしらないあいてと　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　"; // 表示されるテキスト

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + goodbyeText[index]);
      index++;
      if (index === goodbyeText.length) clearInterval(intervalId);
    }, 500); // 1文字表示される間隔（ミリ秒）
    return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにインターバルをクリア
  }, []); // 空の依存配列を渡すことで、最初のレンダリング時のみに実行される

  return (
    <div>
      <div className="Issue">
        <section className="IssueSection">
          <div className="IssueSection-text">
            <div className="bird"></div>
            <div className="bird"></div>
            <div className="bird"></div>
            <p>
              「ラストシーン」
              <p>　</p>
              <p>{text}</p>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GoodByeIssue;
