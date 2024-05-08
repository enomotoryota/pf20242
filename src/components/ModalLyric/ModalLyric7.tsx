import "./ModalLyric.css";

interface ModalLyricProps {
  closeTenguModal: () => void;
}

const ModalLyric7: React.FC<ModalLyricProps> = ({ closeTenguModal }) => {
  return (
    <div className="modal-overlay" onClick={closeTenguModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">天下り天狗</h2>
        <p>山から見ました　天狗と言います</p>
        <p>落ちこぼれでして　こっち（下界）にきました</p>
        <p>君は子供？　大人！？小さいね</p>
        <p>食べてしまいたい　なんてね　嘘だよ</p>
        <p>　</p>
        <p>君と空を飛んで　ちっぽけな町を見て</p>
        <p>何かが変わった気がした</p>
        <p>大切なことはこれから教えるよ</p>
        <p>君を食べるのは　そのあとさ</p>
        <p>　</p>
        <p>山から来ました　太郎と言います</p>
        <p>落ちこぼれでして　こっち（下界）に来ました</p>
        <p>君は大人？　子供！？大きいね</p>
        <p>仲良くなりたい　なんてね　嘘だよ</p>
        <p>　</p>
        <p>君と空を飛んで　ちっぽけな町を見て</p>
        <p>何かが変わった気がした</p>
        <p>大切なことは飛ぶたびに増えた</p>
        <p>もう会えなくなる　そのまえに</p>
        <p>　</p>
        <p>いま都会の山から　ちっぽけな街を見て</p>
        <p>何かが変わった気がした</p>
        <p>大切の意味を教えてくれた</p>
        <p>君は僕の唯一の家族</p>
      </div>
    </div>
  );
};

export default ModalLyric7;
