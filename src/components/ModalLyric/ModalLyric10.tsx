import "./ModalLyric.css";

interface ModalLyricProps {
  closeShinModal: () => void;
}

const ModalLyric10: React.FC<ModalLyricProps> = ({ closeShinModal }) => {
  return (
    <div className="modal-overlay" onClick={closeShinModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">しんきんぐぺんぎん</h2>

        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>

        <p>　</p>
        <p>あしたはどこいくの？　おたるにいくつもり</p>
        <p>それなら、あれだけは　あれだけは、わすれずに！</p>
        <p>　</p>

        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>　</p>
        <p>ふつかめどこいくの　あさひやまどうぶつえん</p>
        <p>それなら、あれだけは　あれだけは、わすれずに！</p>
        <p>　</p>

        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>　</p>
        <p>S(えーす)I(あーい)N(えーぬ)K(けー)</p>
        <p>I(あーい)N(えーむ)G(じー)I(あい)</p>
        <p>SINKINGI(しんきんぎ)</p>
        <p>　</p>

        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
        <p>しんきんぐぺんぎん　しんきんぐぺんぎん</p>
      </div>
    </div>
  );
};

export default ModalLyric10;
