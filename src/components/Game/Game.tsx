// import React, { useState, useEffect } from "react";
// import "./Game.css";

// const Game = () => {
//   const [fontSize, setFontSize] = useState(16); // 初期フォントサイズを設定します

//   useEffect(() => {
//     const handleScroll = () => {
//       // スクロール位置に応じてフォントサイズを変更します
//       const newFontSize = 0 + window.scrollY * 10; // スクロール量に応じてフォントサイズを調整します
//       setFontSize(newFontSize);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <h1
//       className="fixed-scroll-scaling-text"
//       style={{ fontSize: `${fontSize}px` }}
//     >
//       ONOUE RYOTA
//     </h1>
//   );
// };

// export default Game;
