import React from "react";

import "./ModalLyric.css";

interface ModalLyricProps {
  closeSafariParkRendezvousModal: () => void;
}

const ModalLyric2: React.FC<ModalLyricProps> = ({
  closeSafariParkRendezvousModal,
}) => {
  return (
    <div className="modal-overlay" onClick={closeSafariParkRendezvousModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">HERO</h2>

        <p>浮世に渦巻く影が　街に繰り出した時に</p>
        <p>正義の炎を灯す　ひ弱で最弱の</p>
        <p>　</p>
        <p>約束は破るもので　虚言とは仲良くして</p>
        <p>無造作に咲いたliesは　片隅で枯れてる</p>
        <p>閃光が瞳を焦がしてく　淡く揺れる時の記憶</p>
        <p>　</p>
        <p>華奢な光が僕を包み込む　細い糸の様な刹那に</p>
        <p>あの時どうして私庇ったの？　あいにくだがその気はない</p>
        <p>　</p>
        <p>普通の日常が全て　突然消えただけならまだいい</p>
        <p>手のひら返しというには　ただの暇を潰すための存在</p>
        <p>　</p>
        <p>いざという時が　いざきた時に　振りかざす正義は幻？</p>
        <p>あの時どうしてあいつ庇ったの？　気づいた時には遅かった</p>
        <p>　</p>
        <p>暗闇の中、瞳閉ざしたら　見えたものはあの日の僕で</p>
        <p>まっさらな世界でただ泣き喚く　スローモーションで流れる</p>
        <p>　</p>
        <p>景色が色づくためにただ一つ</p>
        <p>君じゃなくちゃいけないのなら　この命果てるまで守り抜くから</p>

        <p>ひ弱で最弱のHERO　今こそ輝け</p>
        {/* <button
          className="modal-button2"
          onClick={closeSafariParkRendezvousModal}
        ></button> */}
      </div>
    </div>
  );
};

export default ModalLyric2;
