import Profile from "./components/Profile/Profile";
import Work from "./components/Work/Work";
import Disc from "./components/Disc/Disc.tsx";
import Activity from "./components/Activity/Activity";
// import Issue from "./components/Issue/Issue";
import Videowork from "./components/Videowork/Videowork";
// import Graph from "./components/Graph/Graph";
// import Goodbye from "./components/Goodbye/Goodbye";
// import Game from "./components/Game/Game";
import AI from "./components/AI/Ai";
import Header from "./components/Header/Header.tsx";
import Magazine from "./components/Magazine/magazine";
import Achievement from "./components/Achievement/Achievement";

import Opportunity from "./components/Opportunity/Opportunity.tsx";

import Wedding from "./components/Wedding/Wedding.tsx";

import Future from "./components/Future/Future.tsx";
import Footer from "./components/Footer/Footer.tsx";
// import Profile2 from "./components/Profile/Profile2.tsx";
// import Game from "./components/Game/Game.tsx";
// import Test from "./components/test.tsx/test.tsx";

import "normalize.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [animationClass, setAnimationClass] = useState("animation-start");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass("animation-end");
    }, 0); // アニメーションの時間

    return () => clearTimeout(timeout);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0); // 1秒後にロード完了
  }, [loaded]);

  return (
    <>
      {isLoading ? (
        <>
          <div id="js_loading" className="bl_loading">
            <div className="bl_loadingCircle"></div>
            <div className="bl_loadingText">loading...</div>
          </div>
          {/* <div className="">
            <div className="clock-container">
              <svg className="clock-svg" viewBox="0 0 100 100">
                <circle className="clock-face" cx="50" cy="50" r="45" />
                <line
                  className="hour-hand"
                  x1="50"
                  y1="50"
                  x2={
                    50 +
                    20 *
                      Math.sin(
                        -(
                          currentTime.getHours() * 30 +
                          currentTime.getMinutes() / 2
                        ) *
                          (Math.PI / 180)
                      )
                  }
                  y2={
                    50 -
                    20 *
                      Math.cos(
                        -(
                          currentTime.getHours() * 30 +
                          currentTime.getMinutes() / 2
                        ) *
                          (Math.PI / 180)
                      )
                  }
                />
                <line
                  className="minute-hand"
                  x1="50"
                  y1="50"
                  x2={
                    50 +
                    30 * Math.sin(-currentTime.getMinutes() * (Math.PI / 30))
                  }
                  y2={
                    50 -
                    30 * Math.cos(-currentTime.getMinutes() * (Math.PI / 30))
                  }
                />
                <line
                  className="second-hand"
                  x1="50"
                  y1="50"
                  x2={
                    50 +
                    35 * Math.sin(-currentTime.getSeconds() * (Math.PI / 30))
                  }
                  y2={
                    50 -
                    35 * Math.cos(-currentTime.getSeconds() * (Math.PI / 30))
                  }
                />
              </svg>
            </div>
          </div> */}
        </>
      ) : (
        <>
          {/* <ParallaxProvider> */}

          {/* <Goodbye /> */}
          {/* <Graph /> */}
          {/* <Test /> */}
          <div className={`background ${animationClass}`}></div>

          <Header />
          <Profile />
          <Achievement />
          <Work />
          <Activity />
          <Disc />
          <Videowork />
          {/* <Issue /> */}
          <Magazine />
          <AI />
          <Opportunity />
          <Wedding />
          <Future />
          <Footer />
          {/* <Profile2 /> */}
          {/* <div>kinggnu</div> */}
          {/* </ParallaxProvider> */}
        </>
      )}
    </>
  );
}

export default App;
