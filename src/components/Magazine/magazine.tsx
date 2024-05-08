import "../Magazine/magazine.css";

import IMG1 from "../img/グッズ/1.png";
import IMG2 from "../img/グッズ/2.png";
import IMG3 from "../img/グッズ/3.png";
import IMG4 from "../img/グッズ/4.png";
// import IMG9 from "../img/グッズ/5.png";
import IMG5 from "../img/グッズ/6.png";
import IMG6 from "../img/グッズ/7.png";
import IMG7 from "../img/グッズ/8.png";
import IMG8 from "../img/グッズ/9.png";
// import IMG8 from "../img/漫画/5.png";

// import IMG10 from "../img/漫画/4.png";
// import IMG11 from "../img/漫画/3.png";
// import IMG12 from "../img/漫画/4.png";
// import IMG13 from "../img/漫画/4.png";

// 画像のURLの配列
const imageUrls = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  // IMG9,
  IMG5,
  IMG6,
  IMG7,
  IMG8,

  // IMG10,
  // IMG11,
  // IMG12,
  // IMG13,
];

// 画像のスタイル
const imageStyle = {
  width: "100%",
  paddingTop: "100%",
};

function Magazine() {
  return (
    <div>
      <div className="magazine">
        <h1>Shop</h1>
        <section className="magazineSection1">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              style={{
                ...imageStyle,
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                // opacity: index === 7 || index === 10,
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Magazine;
