import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [loaded, setLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    setLoaded(true);

    // 消える
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [fontSize, setFontSize] = useState(100); // 初期フォントサイズを設定します

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置に応じてフォントサイズを変更します
      const newFontSize = 100 + window.scrollY * 10; // スクロール量に応じてフォントサイズを調整します
      setFontSize(newFontSize);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`App ${loaded ? "fadeIn" : ""}`}>
        <div className="profile">
          <section className="profileSection">
            <div className="profileSection-text">
              {showTitle && (
                <h1 style={{ fontSize: `${fontSize}px` }}>ONOUE RYOTA</h1>
              )}
              <p>
                尾上亮太と申します
                <br />
                今の自分ができることを詰め込みました
                <br />
                長いですが笑ってくれたら嬉しいな
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
