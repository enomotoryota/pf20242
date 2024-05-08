import React from "react";
import "./ModalLyric.css";

interface ModalLyricProps {
  closeItodooshiModal: () => void;
}

const ModalLyric: React.FC<ModalLyricProps> = ({ closeItodooshiModal }) => {
  return (
    <div className="modal-overlay" onClick={closeItodooshiModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">糸通し</h2>

        <p>たった一つあればいいのに</p>
        <p>最後の言葉は　最初と同じで</p>
        <p>それしかない　しがない人生で</p>
        <p>君を見つけたのは僕の罪</p>
        <p>　</p>
        <p>今しかないなら　</p>
        <p>伝えるなら　今しかないなら</p>
        <p>縦の糸は縦の糸　横の糸は横の糸</p>
        <p>人はそれを糸と言います</p>
      </div>
    </div>
  );
};

export default ModalLyric;
