// import "./Profile.css";
// // import { useEffect, useState } from "react";
// // import { gsap } from "gsap";

// import IMG1 from "../img/1.png";
// import IMG2 from "../img/2.png";
// import IMG3 from "../img/3.png";
// import IMG4 from "../img/4.png";
// import IMG5 from "../img/5.png";
// import IMG6 from "../img/6.png";
// import IMG7 from "../img/7.png";
// import IMG8 from "../img/8.png";
// import IMG9 from "../img/9.png";
// import IMG10 from "../img/10.png";
// import IMG11 from "../img/11.png";
// import IMG12 from "../img/12.png";
// import IMG13 from "../img/13.png";
// import IMG14 from "../img/14.png";
// import IMG15 from "../img/15.png";
// import IMG16 from "../img/16.png";
// import IMG17 from "../img/17.png";
// import IMG18 from "../img/18.png";
// import IMG19 from "../img/19.png";
// // import IMG20 from "../img/20.png";

// const Profile2 = () => {
//   // // 初回読み込みスクロール処理
//   // useEffect(() => {
//   //   const targetScrollPosition = 30; // 例: 30pxにスクロール
//   //   window.scrollTo(0, targetScrollPosition);
//   // }, [0]);

//   // window.onscroll = function () {
//   //   // スクロール量を取得
//   //   let scrollTop = window.pageYOffset;

//   //   // 画像の切り替え条件
//   //   for (let i = 1; i <= 19; i++) {
//   //     let imageId = "image" + i;
//   //     let threshold = i * 25; // 各画像ごとに閾値を設定

//   //     if (scrollTop > threshold) {
//   //       showImage(imageId);
//   //     }
//   //   }
//   // };

//   const showImage = (imageId: any) => {
//     // すべての画像を非表示にする
//     for (let i = 1; i <= 19; i++) {
//       let image = document.getElementById("image" + i);
//       image!.style.opacity = "0";
//       image!.style.display = "none";
//     }

//     console.log(imageId);

//     // 指定された画像を表示する
//     let selectedImage = document.getElementById(imageId);
//     selectedImage!.style.opacity = "1";
//     selectedImage!.style.display = "inline";
//   };

//   let images = [
//     IMG1,
//     IMG2,
//     IMG3,
//     IMG4,
//     IMG5,
//     IMG6,
//     IMG7,
//     IMG8,
//     IMG9,
//     IMG10,
//     IMG11,
//     IMG12,
//     IMG13,
//     IMG14,
//     IMG16,
//     IMG17,
//     IMG18,
//     IMG19,
//     IMG15,
//   ];

//   window.onscroll = function () {
//     var scrollTop = window.pageYOffset;

//     // スクロール位置に応じてランダムな画像を表示
//     var randomIndex = Math.floor(Math.random() * images.length);
//     var randomImageSrc = images[randomIndex];
//     document.getElementById("scrollImage")!.src = randomImageSrc;
//   };

//   return (
//     <div>
//       <div className="profile">
//         <section className="profileSection">
//           <div className="profileSection-text">
//             <h1>尾上亮太</h1>
//             <p>
//               尾上亮太と申します
//               <br />
//               今の自分ができることを詰め込みました
//               <br />
//               長いですが笑ってくれたら嬉しいな
//             </p>
//           </div>
//           <div className="profileSection-img">
//             <img
//               className="image"
//               id="scrollImage"
//               src={IMG1}
//               alt="Image 1"
//             ></img>
//             {/* <img
//               className="image"
//               id="scrollImage"
//               src={IMG2}
//               alt="Image 2"
//             ></img>
//             <img
//               className="image"
//               id="scrollImage"
//               src={IMG3}
//               alt="Image 3"
//             ></img> */}
//             {/* <img className="image" id="image4" src={IMG4} alt="Image 1"></img>
//             <img className="image" id="image5" src={IMG5} alt="Image 1"></img>
//             <img className="image" id="image6" src={IMG6} alt="Image 1"></img>
//             <img className="image" id="image7" src={IMG7} alt="Image 1"></img>
//             <img className="image" id="image8" src={IMG8} alt="Image 1"></img>
//             <img className="image" id="image9" src={IMG9} alt="Image 1"></img>
//             <img className="image" id="image10" src={IMG10} alt="Image 1"></img>
//             <img className="image" id="image11" src={IMG11} alt="Image 1"></img>
//             <img className="image" id="image12" src={IMG12} alt="Image 1"></img>
//             <img className="image" id="image13" src={IMG13} alt="Image 1"></img>
//             <img className="image" id="image14" src={IMG14} alt="Image 1"></img>
//             <img className="image" id="image15" src={IMG15} alt="Image 1"></img>
//             <img className="image" id="image16" src={IMG16} alt="Image 1"></img>
//             <img className="image" id="image17" src={IMG17} alt="Image 1"></img>
//             <img className="image" id="image18" src={IMG18} alt="Image 1"></img>
//             <img className="image" id="image19" src={IMG19} alt="Image 1"></img> */}
//             {/* <img className="image" id="image20" src={IMG20}></img> */}
//             {/* <img className="image" id="image20" src={IMG1} alt="Image 1"></img>
//           <img className="image" id="image21" src={IMG2} alt="Image 2"></img>
//           <img className="image" id="image22" src={IMG3} alt="Image 3"></img>
//           <img className="image" id="image23" src={IMG4} alt="Image 1"></img>
//           <img className="image" id="image24" src={IMG5} alt="Image 1"></img> */}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Profile2;
