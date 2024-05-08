import "./ModalLyric.css";

interface ModalLyricProps {
  close17Modal: () => void;
}

const ModalLyric8: React.FC<ModalLyricProps> = ({ close17Modal }) => {
  return (
    <div className="modal-overlay" onClick={close17Modal}>
      <div className="modal-content">
        <h2 className="modal-content-title">17:49 雨予報</h2>
        <p>雨上がり　空を映し出す　覗き込むと見えないから</p>
        <p>少し遠くでしゃがんで見る　街が疲れたみたいだ</p>
        <p>　</p>
        <p>まるでお菓子を欲しがる子供見たいと　隣にいた君が笑う</p>

        <p>　</p>
        <p>くるり、背を向けると　少し距離のある風景</p>
        <p>土砂降りでも構わないから</p>
        <p>泣き顔のRain　街角には</p>
        <p>　</p>
        <p>この恋は始まらない　この愛は終わらないから</p>
        <p>少し僕ら我慢している　待ちすぎて疲れた</p>
        <p>　</p>
        <p>傘も刺さず駆け出すよ　今も君は待っている</p>
        <p>ずぶ濡れでも構わないから</p>
        <p>約束のRain</p>
        <p>　</p>
        <p>灯火が消えぬように</p>
        <p>相合傘を怖がった自分よ　どうして</p>
        <p>くるり、背を向けると　少し距離のある風景</p>
        <p>ずぶ濡れの君が立ち尽くす</p>
        <p>　</p>
        <p>木枯らしが過ぎる頃　雨は雪に変わるから</p>
        <p>君をもう２度と離さないから</p>
        <p>約束のSnow　どうか積もれ　夢でもいい</p>
      </div>
    </div>
  );
};

export default ModalLyric8;
