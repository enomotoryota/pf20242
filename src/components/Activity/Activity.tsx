import "./Activity.css";

function Activity() {
  return (
    <div className="Activity">
      <section className="ActivitySection">
        <h1 className="ActivitySection-title">Activity</h1>
        <div className="ActivitySectionContents">
          <div className="ActivitySectionContent">
            <time className="ActivitySectionContent-time">2024.03.01</time>
            <span className="ActivitySectionContent-line">|</span>
            <span className="ActivitySectionContent-text">
              ポートフォリオ作成
            </span>
          </div>
          <div className="ActivitySectionContent">
            <time className="ActivitySectionContent-time">2007.08.31</time>
            <span className="ActivitySectionContent-line">|</span>
            <span className="ActivitySectionContent-text">
              ズボンにトイレットペーパーが挟まってて友達から一旦木綿って呼ばれる
            </span>
          </div>
          <div className="ActivitySectionContent">
            <time className="ActivitySectionContent-time">2007.08.16</time>
            <span className="ActivitySectionContent-line">|</span>
            <span className="ActivitySectionContent-text">
              ブリーチにはまる
            </span>
          </div>
          <div className="ActivitySectionContent">
            <time className="ActivitySectionContent-time">白亜紀</time>
            <span className="ActivitySectionContent-line">|</span>
            <span className="ActivitySectionContent-text">恐竜がいた</span>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

export default Activity;
