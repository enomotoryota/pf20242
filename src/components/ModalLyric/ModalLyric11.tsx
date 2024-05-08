import "./ModalLyric.css";

interface ModalLyricProps {
  closeLastModal: () => void;
}

const ModalLyric11: React.FC<ModalLyricProps> = ({ closeLastModal }) => {
  return (
    <div className="modal-overlay" onClick={closeLastModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">ラストシーン</h2>

        <p>借りてた小説、二人と重なる</p>
        <p>予言書見たいと笑うこともなく返す</p>
        <p>これでお別れね　本当にごめんね。</p>
        <p>それは言わない約束でしょう</p>
        <p>帰り送ってくよ。なんて言えるはずない </p>
        <p>　</p>
        <p>さよなら愛したあなたはもういない</p>
        <p>わかってる二人は戻らない</p>
        <p>これから僕らは違った物語を綴る</p>
        <p>お互い知らない相手と</p>
        <p>　</p>
        <p>時を戻せたら、小説のようにはいかない</p>
        <p>若気の至りと犯した罪、許してくれませんか</p>
        <p>　</p>
        <p>言葉が棘なら心は風船だ</p>
        <p>一度割れたら２度とは戻らない</p>
        <p>だからこそ大事にぶつけた冷たい棘だらけの芯が残って痛いよ</p>
        <p>　</p>
        <p>近くて遠くて影だけを抱きしめた</p>
        <p>瞬きするほど離れる気がして</p>
        <p>　</p>
        <p>言葉が棘なら心は風船だ</p>
        <p>一度割れたら２度とは戻らない</p>
        <p>去り際、あなたが選んだラストシーン</p>
        <p>二人は歩き出す、違った出口へ</p>
      </div>
    </div>
  );
};

export default ModalLyric11;
