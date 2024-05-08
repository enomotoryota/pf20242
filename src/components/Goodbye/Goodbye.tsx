// import React, { useEffect, useState } from "react";
// import "./Goodbye.css"; // スタイル用のCSSファイルをインポート

// import GoodByeIssue from "../Issue/GoodByeIssue";

// const Goodbye = () => {
//   const [text, setText] = useState(""); // 表示されるテキストを管理するstate
//   const goodbyeText =
//     "さよよならあいしたあなたはもういない　　　　　　　　　　　辛くない　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　"; // 表示されるテキスト

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setText((prevText) => prevText + goodbyeText[index]);
//       index++;
//       if (index === goodbyeText.length) clearInterval(intervalId);
//     }, 500); // 1文字表示される間隔（ミリ秒）

//     return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにインターバルをクリア
//   }, []); // 空の依存配列を渡すことで、最初のレンダリング時のみに実行される

//   //   IKNOW
//   const [isVisible, setIsVisible] = useState(false);
//   const [isVisible2, setIsVisible2] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 9000); // 10秒後に文字を表示する

//     return () => clearTimeout(timer); // コンポーネントがアンマウントされたときにタイマーをクリア
//   }, []);

//   useEffect(() => {
//     const timer2 = setTimeout(() => {
//       setIsVisible2(true);
//     }, 13000); // 10秒後に文字を表示する

//     return () => clearTimeout(timer2); // コンポーネントがアンマウントされたときにタイマーをクリア
//   }, []);

//   const [currentTime, setCurrentTime] = useState(new Date());

//   // 毎秒ごとに時刻を更新する
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにインターバルをクリア
//   }, []);

//   const [showNext, setShowNext] = useState(false);

//   // 10秒後にNEXTを表示する
//   setTimeout(() => {
//     setShowNext(true);
//   }, 17000);

//   // NEXTが表示されているときにクリックされたときの処理
//   const handleClick = () => {
//     window.scrollBy({
//       top: 700,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleClick();
//     }, 20000); // 20秒後にhandleClickを実行

//     return () => clearTimeout(timer); // コンポーネントがアンマウントされたときにタイマーをクリア
//   }, []);

//   return (
//     <div className="GoodBye">
//       <div className="context">
//         {/* NEXTが表示される条件が満たされたときに表示 */}
//         {showNext && (
//           <div>
//             <button className="scroll-down5" onClick={handleClick}></button>
//             <button className="scroll-down"></button>
//             <button className="scroll-down1"></button>
//           </div>
//         )}
//         <div className="GoodByeText">{text}</div>
//         <div className="rotation-container">
//           {isVisible && <div className="rotating-text">I KNOW</div>}
//         </div>

//         <section className="container">
//           <div className="wrap">
//             <div className="pattern"></div>
//           </div>
//         </section>

//         {isVisible2 && (
//           <div className="">
//             <div className="clock-container">
//               <svg className="clock-svg" viewBox="0 0 100 100">
//                 <circle className="clock-face" cx="50" cy="50" r="45" />
//                 <line
//                   className="hour-hand"
//                   x1="50"
//                   y1="50"
//                   x2={
//                     50 +
//                     20 *
//                       Math.sin(
//                         -(
//                           currentTime.getHours() * 30 +
//                           currentTime.getMinutes() / 2
//                         ) *
//                           (Math.PI / 180)
//                       )
//                   }
//                   y2={
//                     50 -
//                     20 *
//                       Math.cos(
//                         -(
//                           currentTime.getHours() * 30 +
//                           currentTime.getMinutes() / 2
//                         ) *
//                           (Math.PI / 180)
//                       )
//                   }
//                 />
//                 <line
//                   className="minute-hand"
//                   x1="50"
//                   y1="50"
//                   x2={
//                     50 +
//                     30 * Math.sin(-currentTime.getMinutes() * (Math.PI / 30))
//                   }
//                   y2={
//                     50 -
//                     30 * Math.cos(-currentTime.getMinutes() * (Math.PI / 30))
//                   }
//                 />
//                 <line
//                   className="second-hand"
//                   x1="50"
//                   y1="50"
//                   x2={
//                     50 +
//                     35 * Math.sin(-currentTime.getSeconds() * (Math.PI / 30))
//                   }
//                   y2={
//                     50 -
//                     35 * Math.cos(-currentTime.getSeconds() * (Math.PI / 30))
//                   }
//                 />
//               </svg>
//             </div>
//           </div>
//         )}
//         <div className="bird"></div>
//         {/* <div className="bird -type_2"></div> */}
//         {/* <div className="bird -type_3"></div> */}
//         <div className="scroll-next-container"></div>

//         <GoodByeIssue />
//       </div>
//     </div>
//   );
// };

// export default Goodbye;
