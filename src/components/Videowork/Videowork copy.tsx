// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// import "./Videowork.css";

// function Videowork() {
//   useEffect(() => {
//     const stickySections = [...document.querySelectorAll(".sticky_wrap")];

//     let images = [
//       "https://raw.githubusercontent.com/bibomato/hybrid_scroll_img/633269acf63b2ab55e72b69d9402f4c37388ac2d/image/image01.jpg",
//       "https://raw.githubusercontent.com/bibomato/hybrid_scroll_img/633269acf63b2ab55e72b69d9402f4c37388ac2d/image/image02.jpg",
//       "https://raw.githubusercontent.com/bibomato/hybrid_scroll_img/633269acf63b2ab55e72b69d9402f4c37388ac2d/image/image03.jpg",
//       "https://raw.githubusercontent.com/bibomato/hybrid_scroll_img/633269acf63b2ab55e72b69d9402f4c37388ac2d/image/image04.jpg",
//       "https://raw.githubusercontent.com/bibomato/hybrid_scroll_img/633269acf63b2ab55e72b69d9402f4c37388ac2d/image/image05.jpg",
//     ];

//     images.forEach((img) => {
//       stickySections.forEach((section) => {
//         let image = document.createElement("img");
//         image.src = img;
//         section.querySelector(".horizontal_scroll").appendChild(image);
//       });
//     });

//     const handleScroll = () => {
//       for (let i = 0; i < stickySections.length; i++) {
//         transform(stickySections[i]);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // 空の依存配列を渡すことで、初回レンダリング時のみ実行される

//   const transform = (section) => {
//     const offsetTop = section.parentElement.offsetTop;
//     const scrollSection = section.querySelector(".horizontal_scroll");
//     let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
//     percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
//     scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
//   };

//   return (
//     <div className="Videowork">
//       <section className="VideoworkSection">
//         <div className="VideoworkSctionContent">
//           <h1>映像作品</h1>
//           <p>2014~2020</p>
//         </div>
//       </section>

//       <div className="scroll_container">
//         <div className="sticky_wrap">
//           <div className="horizontal_scroll"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Videowork;
