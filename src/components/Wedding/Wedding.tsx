// import React from "react";
import YouTube from "react-youtube";

import "../Wedding/Wedding.css";

function Wedding() {
  // YouTubeプレーヤーのオプションを設定します
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  // YouTubeプレーヤーが準備できたときの処理を定義します
  const onReady = (event: any) => {
    // event.target.playVideo();  // プレーヤーが準備できたら、自動再生する場合
    console.log(event);
  };

  return (
    <div className="wedding">
      <div className="weddingSection">
        <h1 className="weddingSectionTitle">
          結婚式でディズニーを挙げました！
        </h1>
        <div className="weddingSection-youtube">
          <div className="responsive-video-container">
            <YouTube
              className="iframe"
              videoId="Mcs9bKs9FpY" // YouTube動画のIDを指定します
              opts={opts}
              onReady={onReady} // プレーヤーが準備できたときのコールバック関数を指定します
            />
          </div>
          <div className="weddingSection-youtubeSection">
            {/* <h2>最新の動画作品</h2> */}
            <p>謝辞が出てこなかった</p>
          </div>
        </div>
        <div className="weddingSection-next">{/* <h2>Next</h2> */}</div>
      </div>
    </div>
  );
}

export default Wedding;
