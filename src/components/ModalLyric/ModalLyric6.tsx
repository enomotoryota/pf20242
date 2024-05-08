import "./ModalLyric.css";

interface ModalLyricProps {
  closeTokkyoModal: () => void;
}

const ModalLyric6: React.FC<ModalLyricProps> = ({ closeTokkyoModal }) => {
  return (
    <div className="modal-overlay" onClick={closeTokkyoModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">専売特許（アルバムver）</h2>
        <p>burning up to「横穴地獄」</p>
        <p>大阪はお洒落な通路</p>
        <p>今夜は君と泳ごうよ　salt</p>
        <p>隣人同士で　grove</p>
        <p>　</p>
        <p>darling, hear you love me</p>
        <p>恋のせいで生きりゃいいじゃん</p>
        <p>baby, may you say me?</p>
        <p>魔物の血が騒ぐ　悩んで</p>
        <p>　</p>
        <p>C'mon Baby アシナガカニじゃない</p>
        <p>シャケ　シャケ　だもんなぁ</p>
        <p>皮だけ残せばいいじゃない</p>
        <p>無事無事　がんも sale</p>
      </div>
    </div>
  );
};

export default ModalLyric6;
