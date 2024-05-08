import React from "react";
import "./ModalLyric.css";

interface ModalLyricProps {
  closeNoModal: () => void;
}

const ModalLyric4: React.FC<ModalLyricProps> = ({ closeNoModal }) => {
  return (
    <div className="modal-overlay" onClick={closeNoModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">そこに誰もいなくても</h2>
        <p>ただ強く抱きしめて欲しかった</p>
        <p>わかってるようで　何も起こらず</p>
        <p>暗い空はカーテンのように広がり</p>
        <p>君の行く道をガラッと閉ざす</p>
        <p>　</p>
        <p>いま踏み出して　ぐっと前に踏み出して</p>
        <p>厳しさがズブリ胸につき刺さる</p>
        <p>It's time to let go　It's time to let glow</p>

        <p>苦くても難しくても　そのままでいいよ</p>
        <p>　</p>
        <p>立ち止まった先に見えたのは　想像以上の風と光</p>
        <p>そこに誰もいなくても</p>
        <p></p>
        <p>ずっと見ていた空　多分それは</p>
        <p>ずっと聴いてたstory</p>
        <p></p>
        <p>Thank you so match　Thank you so match</p>
        <p>立ち止まった先に見えたのは</p>
        <p>想像以上の風と光</p>
        <p>そこに誰もいなくても</p>
        <p>　</p>
        <p>風は消え　時は止まる</p>
        <p>それでもいい</p>
      </div>
    </div>
  );
};

export default ModalLyric4;
