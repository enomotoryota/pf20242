import "./ModalLyric.css";

interface ModalLyricProps {
  closeToriModal: () => void;
}

const ModalLyric9: React.FC<ModalLyricProps> = ({ closeToriModal }) => {
  return (
    <div className="modal-overlay" onClick={closeToriModal}>
      <div className="modal-content">
        <h2 className="modal-content-title">トリマーよ！</h2>
        <div className="modal-content-text">
          <div className="modal-content-text1">
            <p>でもさ　アイツも言ってたけど</p>
            <p>何でも　気のもちようじゃないの</p>
            <p>食欲なさそうな顔で僕を噛むなら　骨を噛んで</p>
            <p>街行くポメやダックスを</p>
            <p>気の済むまでワンワンしたら</p>
            <p>　</p>
            <p>家のお風呂を犬かきで横切ってゆこう</p>
            <p>犬たちの全身を刈る　トリマーよ！</p>
            <p>堂々としてるフォーム　なんかたぶんそんなカンジで</p>
            <p>ほねっこを見逃さないように</p>
            <p>　</p>

            <p>ってかさ　何も始まっていない</p>
            <p>じゃけん　まだ何も終わっていない</p>
            <p>夕闇に飲み込まれそうな　我がボデェにうんざりしてるだけ</p>
            <p>ムリヤリでもいい　ここはいっそ</p>
            <p>「わん！！わん！！ばうばう！！！」って叫んだら</p>
          </div>
          <div className="modal-content-text2">
            <p>庭のプールを犬かきで横切ってゆこう</p>
            <p>僕らは悩み多きトリマーだ！</p>
            <p>吠えてすごく吠えてボールにタッチすれば</p>
            <p>明日も捨てたもんじゃないぽよ</p>
            <p>吠えてみるのも平和に吠えてみるのも</p>
            <p>猫のように「にゃ！」ってするのもいい</p>
            <p>お腹をみせて　お腹触ってほしい</p>
            <p>この歌詞、何目線</p>
            <p>　</p>
            <p>毛量のことで　見えないくらい小さなことで</p>
            <p>流れをつかみそこねるトリマーよ！</p>
            <p>ばう！！っとしてるうちに濁らせちゃった　水の中</p>
            <p>しっかりと毛を剃らしていこう</p>
            <p>終わることのない　悲しみを喜びに</p>
            <p>全ての失敗を成功に</p>
            <p>溢れ溢れる　嘆きを歌声に</p>
            <p>パクリじゃない　じゃないけど　謝るよ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLyric9;
