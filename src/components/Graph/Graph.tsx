// import React, { useEffect, useRef } from "react";
// import { TweenMax } from "gsap";

// const Graph = () => {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPercent =
//         (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
//         100;
//       const rotation = scrollPercent * 100; // スクロールに応じて回転角度を計算します
//       TweenMax.to(boxRef.current, 0.5, { rotation: rotation }); // 回転角度をアニメーション化します
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         height: "200vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         ref={boxRef}
//         style={{
//           width: "100px",
//           height: "100px",
//           background: "blue",
//           transformOrigin: "center",
//         }}
//       />
//     </div>
//   );
// };

// export default Graph;
