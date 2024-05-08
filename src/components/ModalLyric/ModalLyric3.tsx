import React from "react";
import "./ModalLyric.css";

interface ModalLyricProps {
  closeDDDModal: () => void;
}

const ModalLyric3: React.FC<ModalLyricProps> = ({ closeDDDModal }) => {
  return (
    <div className="modal-overlay" onClick={closeDDDModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">domestic difficult dance</h2>
        <p>グルグルと天井見渡して　この世界の狭さに垂れる</p>
        <p>あまりに小さな地球儀を見て　救われようとジャケットを羽織る</p>
        <p>　</p>
        <p>Give me your love,Free my love </p>
        <p>Give me your love,Free my love </p>
        <p>　</p>
        <p>ラジオから流れる売名行為</p>
        <p>嘘で固めたポーカーフェイス</p>
        <p>裏のルート　闇のコネクション</p>
        <p>新たな真相と嘘</p>
        <p>　</p>
        <p>足りないマニュアルに通りの恋の歌</p>
        <p>動じない　かつての天才がいるよ</p>
        <p>(Give me your love,Give me your love,Give me your love)</p>
        <p>さぁ　踊ろう　疲れるまで</p>
        <p>(Give me your love,Give me your love,Give me your love)</p>
        <p>まだ見ぬ未来を託してくれるなら</p>
        <p>domestic　difficult　dance</p>
      </div>
    </div>
  );
};

export default ModalLyric3;
