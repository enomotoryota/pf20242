import "./Opportunity.css";

import BG1 from "../img/back1.png";

function Opportunity() {
  return (
    <div className="opportunity">
      <div className="opportunity-img">
        <img className="images" src={BG1} alt="Image 1"></img>
      </div>
      <section className="opportunitySection">
        <h1 className="opportunitySection-title">Create the opportunity</h1>
        <h1 className="opportunitySection-title-sub">wonderful</h1>
        <p className="opportunitySection-text">自分の名前を検索した時に</p>
        <p>何も出なかった</p>
        <p className="opportunitySection-text3">それがさみしかったんです。</p>
        <p className="opportunitySection-text2">
          自分が作ったものや、残したいものはこんなにあるのに
        </p>
        <p>　</p>
        <p>いつかこの地球がなくなって</p>
        <p className="opportunitySection-text1">このサイトだけが見つかって</p>
        <p>宇宙人が</p>
        <p className="opportunitySection-text3">
          「なんやこれ！そりゃ、この星の生物は絶滅するわ」
        </p>
        <p>ってなったら申し訳ないから</p>
        <p>どうか、滅亡とともに</p>
        <p className="opportunitySection-text3">消えてくれ</p>
        <p>僕の思いよ</p>
        <p className="opportunitySection-text5">止まれ</p>
        <p>僕のカケラよ</p>
        <p>走れ　高速の</p>
        <p className="opportunitySection-text5">帝国華撃団</p>
        <p>唸れ　衝撃の</p>
        <p className="opportunitySection-text5">帝国華撃団</p>
        <p>　</p>
        <p>伝えたかったことはこれじゃない</p>
      </section>
    </div>
  );
}

export default Opportunity;
