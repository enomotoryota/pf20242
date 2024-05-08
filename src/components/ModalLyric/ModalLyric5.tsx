import "./ModalLyric.css";

interface ModalLyricProps {
  closeDreamingModal: () => void;
}

const ModalLyric5: React.FC<ModalLyricProps> = ({ closeDreamingModal }) => {
  return (
    <div className="modal-overlay" onClick={closeDreamingModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">遊泳dreaming</h2>
        <p>はちみつ！たおるのしみ！</p>
        <p>(みんな一緒)</p>
        <p>とりにく！みかんのかわ！</p>
        <p>(みんな一緒)</p>
        <p>まきびし！かぶぬし！</p>
        <p>(みんな一緒)</p>
        <p>門司港！門司港！門司港！</p>
        <p>　</p>
        <p>しへい！みぎきき！</p>
        <p>(みんな一緒)</p>
        <p>ころっけ！かわうそくん！</p>
        <p>(みんな一緒)</p>
        <p>めんぼう！むにえるふうみ！</p>
        <p>(みんな一緒)</p>
        <p>熱気球！熱気球！熱気球！</p>
        <p>　</p>
        <p>例えばあの頃のままの二人なら</p>
        <p>気にすることもない</p>
        <p>解けないものがすっと解けていくみたい</p>
        <p>例え話だよ　夢の話かも</p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default ModalLyric5;
