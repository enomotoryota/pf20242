import "./Work.css";
import IMG22 from "../img/22.png";
import IMG1 from "../img/ポートフォリオ.png";
import IMG2 from "../img/ポートフォリオ2.png";

function Work() {
  return (
    <div className="Work">
      <section className="WorkSection">
        <h1 className="WorkSection-title">Work</h1>
        <div className="WorkSectionContents">
          <img className="workImg" id="image1" src={IMG1} alt="Image 1"></img>
          <p className="WorkSectionContents-text">
            存在しないアルバムの曲紹介ページ
            <br />
            King GnuのTHE GREATEST
            UNKNOWNの公式サイトがかっこいいので真似しました <br />
            歌詞も書いたので見ないでほしいな
            <br />
            <br />
            コーディング期間：3日
            <br />
            作詞期間：18日
            <br />
            <a href="https://www.kinggnutgu.com/">
              {" "}
              King Gnu / THE GREATEST UNKNOWN公式サイト
            </a>
          </p>
        </div>
        <div className="WorkSectionContents">
          <img className="workImg" id="image2" src={IMG22} alt="Image 1"></img>
          <p className="WorkSectionContents-text">
            ポートフォリオ
            <br />
            顔がいっぱい出てきて怖かったです <br />
            <br />
            制作期間：3週間
            <br />
            <a href="/">このサイト</a>
          </p>
        </div>
        <div className="WorkSectionContents">
          <img className="workImg" id="image1" src={IMG2} alt="Image 1"></img>
          <p className="WorkSectionContents-text">
            自作の作品集を横スクロール
            <br />
            King GnuのTHE GREATEST
            UNKNOWNの公式サイトがかっこいいので真似しました <br />
            クリックで再生されるので見ないでほしいな
            <br />
            <br />
            制作期間：2日
            <br />
            <a href="https://www.kinggnutgu.com/">
              {" "}
              King Gnu / THE GREATEST UNKNOWN公式サイト
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Work;
