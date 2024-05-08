import "./Disc.css";
import ModalLyric from "../ModalLyric/ModalLyric";
import ModalLyric2 from "../ModalLyric/ModalLyric2";
import ModalLyric3 from "../ModalLyric/ModalLyric3";
import ModalLyric4 from "../ModalLyric/ModalLyric4";
import ModalLyric5 from "../ModalLyric/ModalLyric5";
import ModalLyric6 from "../ModalLyric/ModalLyric6";
import ModalLyric7 from "../ModalLyric/ModalLyric7";
import ModalLyric8 from "../ModalLyric/ModalLyric8";
import ModalLyric9 from "../ModalLyric/ModalLyric9";
import ModalLyric10 from "../ModalLyric/ModalLyric10";
import ModalLyric11 from "../ModalLyric/ModalLyric11";
import ModalLyric12 from "../ModalLyric/ModalLyric12";

import IMG1 from "../img/album/1.png";
import IMG2 from "../img/album/2.png";
import IMG3 from "../img/album/3.png";
import IMG4 from "../img/album/4.png";
import IMG5 from "../img/album/5.png";
import IMG6 from "../img/album/6.png";
import IMG7 from "../img/album/7.png";
import IMG8 from "../img/album/8.png";
import IMG9 from "../img/album/9.png";
import IMG10 from "../img/album/10.png";
import IMG11 from "../img/album/11.png";
import IMG12 from "../img/album/12.png";
import IMG13 from "../img/album/13.png";
import IMG14 from "../img/album/14.png";
import IMG15 from "../img/album/15.png";
import IMG16 from "../img/album/16.png";
import IMG17 from "../img/album/17.png";
import IMG19 from "../img/album/19.png";
import IMG21 from "../img/album/21.png";
// import IMG22 from "../img/album/22.png";
// import IMG23 from "../img/album/23.png";
import IMG24 from "../img/album/24.png";
import IMG25 from "../img/album/25.png";
import IMG26 from "../img/album/26.png";
import IMG27 from "../img/album/27.png";
import IMG28 from "../img/album/28.png";
// import IMG29 from "../img/album/29.png";

import { useState } from "react";

const Disc = () => {
  // モーダルステート
  const [isItodooshiModalOpen, setIsItodooshiModalOpen] = useState(false);

  const [isSafariParkRendezvousModalOpen, setIsSafariParkRendezvousModalOpen] =
    useState(false);

  const [isDDDModalOpen, setIsDDDModalOpen] = useState(false);

  const [isNoModalOpen, setIsNoModalOpen] = useState(false);

  const [isDreamingModalOpen, setIsDreamingModalOpen] = useState(false);

  const [isTokkyoModalOpen, setIsTokkyoModalOpen] = useState(false);

  const [isTenguModalOpen, setIsTenguModalOpen] = useState(false);

  const [is17ModalOpen, setIs17ModalOpen] = useState(false);

  const [isToriModalOpen, setIsToriModalOpen] = useState(false);

  const [isShinModalOpen, setIsShinModalOpen] = useState(false);

  const [isLastModalOpen, setIsLastModalOpen] = useState(false);

  const [is_ModalOpen, setIs_ModalOpen] = useState(false);

  // 開く
  const handleItodooshiClick = () => {
    setIsItodooshiModalOpen(true);
  };

  const handleSafariParkRendezvousClick = () => {
    setIsSafariParkRendezvousModalOpen(true);
  };

  const handleDDDClick = () => {
    setIsDDDModalOpen(true);
  };

  const handleNoClick = () => {
    setIsNoModalOpen(true);
  };

  const handleDreamingClick = () => {
    setIsDreamingModalOpen(true);
  };

  const handleTokkyoClick = () => {
    setIsTokkyoModalOpen(true);
  };

  const handleTenguClick = () => {
    setIsTenguModalOpen(true);
  };

  const handle17Click = () => {
    setIs17ModalOpen(true);
  };

  const handleToriClick = () => {
    setIsToriModalOpen(true);
  };

  const handleShinClick = () => {
    setIsShinModalOpen(true);
  };

  const handleLastClick = () => {
    setIsLastModalOpen(true);
  };

  const handle_Click = () => {
    setIs_ModalOpen(true);
  };

  // 閉じる
  const closeItodooshiModal = () => {
    setIsItodooshiModalOpen(false);
  };

  const closeSafariParkRendezvousModal = () => {
    setIsSafariParkRendezvousModalOpen(false);
  };

  const closeDDDModal = () => {
    setIsDDDModalOpen(false);
  };

  const closeNoModal = () => {
    setIsNoModalOpen(false);
  };

  const closeDreamingModal = () => {
    setIsDreamingModalOpen(false);
  };

  const closeTokkyoModal = () => {
    setIsTokkyoModalOpen(false);
  };

  const closeTenguModal = () => {
    setIsTenguModalOpen(false);
  };

  const close17Modal = () => {
    setIs17ModalOpen(false);
  };

  const closeToriModal = () => {
    setIsToriModalOpen(false);
  };

  const closeShinModal = () => {
    setIsShinModalOpen(false);
  };

  const closeLastModal = () => {
    setIsLastModalOpen(false);
  };

  const close_Modal = () => {
    setIs_ModalOpen(false);
  };

  // const showImage = (imageId: string) => {
  //   // すべての画像を非表示にする
  //   for (let i = 1; i <= 21; i++) {
  //     let image = document.getElementById("image" + i);
  //     image!.style.opacity = "0";
  //     image!.style.display = "none";
  //   }

  //   // 指定された画像を表示する
  //   let selectedImage = document.getElementById(imageId);
  //   selectedImage!.style.opacity = "1";
  //   selectedImage!.style.display = "inline";
  // };

  let images = [
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
    IMG9,
    IMG10,
    IMG11,
    IMG12,
    IMG13,
    IMG14,
    IMG15,
    IMG16,
    IMG17,
    IMG19,
    IMG21,
    // IMG22,
    // IMG23,
    IMG24,
    IMG25,
    IMG26,
    IMG27,
    IMG28,
    // IMG29,
  ];

  window.onscroll = function () {
    let scrollTop = window.scrollY;

    // スクロール位置が10ピクセルを超えたらランダムな画像を表示
    if (scrollTop > 10) {
      // スクロール位置に応じてランダムな画像を表示
      let randomIndex = Math.floor(Math.random() * images.length);

      let randomImageSrc = images[randomIndex];

      (document.getElementById("scrollImage") as HTMLImageElement).src =
        randomImageSrc;
    }
  };

  return (
    <div className="album">
      <section className="albumSection">
        <div className="albumSection-text">
          <div className="albumSection-textTitle">
            <h2>DISC1</h2>
            <h3>THE GREATEST DDD</h3>
          </div>
          <div className="albumSectionContent" onClick={handleItodooshiClick}>
            <div className="albumSectionContent-num">01</div>
            <span className="albumSectionContent-text">糸通し</span>
            <p>六角堂 美味しいは侮れないTVCM</p>
          </div>
          <div
            className="albumSectionContent"
            onClick={handleSafariParkRendezvousClick}
          >
            <div className="albumSectionContent-num">02</div>

            <span className="albumSectionContent-text">
              HERO -Teenager Fighter-
            </span>
            <p>喜連瓜破動物園　テーマソング</p>
          </div>
          <div className="albumSectionContent" onClick={handleDDDClick}>
            <div className="albumSectionContent-num">03</div>

            <span className="albumSectionContent-text">
              domestic difficult dance
            </span>
            <p></p>
          </div>
          <div className="albumSectionContent" onClick={handleNoClick}>
            <div className="albumSectionContent-num">04</div>
            <span className="albumSectionContent-text">
              そこに誰もいなくても
            </span>
            <p>奥様は土井!?　ドラマ主題歌</p>
          </div>
          <div className="albumSectionContent" onClick={handleDreamingClick}>
            <div className="albumSectionContent-num">05</div>
            <span className="albumSectionContent-text">遊泳dreaming</span>
            <p>喜連瓜破動物園　テーマソング2期</p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handleTokkyoClick}>
            <div className="albumSectionContent-num">06</div>

            <span className="albumSectionContent-text">
              専売特許（アルバムver）
            </span>
            <p>
              ドラえもん 機械鎧の筋肉痛(オートメイルのきんにく２)　映画主題歌
            </p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handleTenguClick}>
            <div className="albumSectionContent-num">07</div>
            <span className="albumSectionContent-text">天下り天狗</span>
            <p>島耕作(天下り編)　映画主題歌</p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handle17Click}>
            <div className="albumSectionContent-num">08</div>

            <span className="albumSectionContent-text">17:49 雨予報</span>
            <p>TV番組 霜降り明星の手相怪談　エンディングテーマソング</p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handleToriClick}>
            <div className="albumSectionContent-num">09</div>
            <span className="albumSectionContent-text">トリマーよ！</span>
            <p>喜連瓜破動物園　テーマソング3期</p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handleShinClick}>
            <div className="albumSectionContent-num">10</div>

            <span className="albumSectionContent-text">しんきんぐぺんぎん</span>
            <p></p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handleLastClick}>
            <div className="albumSectionContent-num">11</div>

            <span className="albumSectionContent-text">ラストシーン</span>
            <p>森脇石油（株）南海プロパン　テーマソング</p>
          </div>{" "}
          <div className="albumSectionContent" onClick={handle_Click}>
            <div className="albumSectionContent-num">12</div>

            <span className="albumSectionContent-text">
              －・・－・ ・－－・－ －・－－・ －－－・－ －－・－・ ・－・－・
              －－－－ ・・ ・・－
            </span>
            <p></p>
          </div>
        </div>
        <div className="albumSection-img">
          <img
            className="image"
            id="scrollImage"
            src={IMG1}
            alt="Image 1"
          ></img>
        </div>
      </section>
      {isItodooshiModalOpen && (
        <ModalLyric closeItodooshiModal={closeItodooshiModal} />
      )}
      {isSafariParkRendezvousModalOpen && (
        <ModalLyric2
          closeSafariParkRendezvousModal={closeSafariParkRendezvousModal}
        />
      )}
      {isDDDModalOpen && <ModalLyric3 closeDDDModal={closeDDDModal} />}
      {isNoModalOpen && <ModalLyric4 closeNoModal={closeNoModal} />}
      {isDreamingModalOpen && (
        <ModalLyric5 closeDreamingModal={closeDreamingModal} />
      )}{" "}
      {isTokkyoModalOpen && <ModalLyric6 closeTokkyoModal={closeTokkyoModal} />}
      {isTenguModalOpen && (
        <ModalLyric7 closeTenguModal={closeTenguModal} />
      )}{" "}
      {is17ModalOpen && <ModalLyric8 close17Modal={close17Modal} />}
      {isToriModalOpen && <ModalLyric9 closeToriModal={closeToriModal} />}{" "}
      {isShinModalOpen && <ModalLyric10 closeShinModal={closeShinModal} />}{" "}
      {isLastModalOpen && <ModalLyric11 closeLastModal={closeLastModal} />}{" "}
      {is_ModalOpen && <ModalLyric12 close_Modal={close_Modal} />}
    </div>
  );
};

export default Disc;
