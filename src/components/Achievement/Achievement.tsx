import "../Achievement/Achievement.css";

function Achievement() {
  return (
    <div className="Achievement">
      <section className="AchievementSection">
        <h1 className="AchievementSection-title">これまでの実績</h1>
        <h2 className="AchievementSection-title-sub">見てってや〜！</h2>
        <div className="AchievementSection-run">素通り禁止〜！</div>
        <div className="AchievementSectionContent1">
          <p>★★★★★★★★★★★★★★★</p>
          <div className="AchievementSectionContent">
            <div className="AchievementSectionContent2">
              <time className="AchievementSectionContent-time">2020</time>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-text">TOEIC </span>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-line">270点</span>
            </div>
            <p>英語勉強しよ！まずはTOEICや！でこの結果。やれやれ</p>
          </div>
          <div className="AchievementSectionContent">
            <div className="AchievementSectionContent2">
              <time className="AchievementSectionContent-time">2019</time>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-text">簿記三級 </span>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-line">不合格</span>
            </div>
            <p>なんか資格とろ！まずは簿記や！でこの結果。本当にさ</p>
          </div>
          <div className="AchievementSectionContent">
            <div className="AchievementSectionContent2">
              <time className="AchievementSectionContent-time">2009</time>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-text">
                アニソングランプリ{" "}
              </span>
              {/* <span className="AchievementSectionContent-line">/</span> */}
              <span className="AchievementSectionContent-line">
                書類選考通らず
              </span>
            </div>
            <p>歌うことは楽しいで！挑戦や！！で何も起こらんかった</p>
          </div>
          <p>★★★★★★★★★★★★★★★</p>
        </div>
      </section>
    </div>
  );
}

export default Achievement;
