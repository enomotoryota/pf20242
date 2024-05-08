import { useState, useEffect } from "react";
import "./Videowork.css";
import Modal from "../Modal/Modal";
("../Modal/Modal");

import SMN1 from "../img/サムネ1.png";
import SMN2 from "../img/青鬼.png";
import SMN3 from "../img/え？あぁ。そう.png";
import SMN4 from "../img/サビ.png";
import SMN5 from "../img/ぺんぎんサムネ.png";

type HandleImageClick = (
  image: string,
  video: string,
  day: string,
  subtitle: string,
  description: string
) => void;

function Videowork() {
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの表示状態を管理するstate
  const [selectedImage, setSelectedImage] = useState<string | null>("");

  console.log(selectedImage);

  // const [selectedVideo, setSelectedVideo] = useState<string | null>("");

  const [selectedVideo, setSelectedVideo] = useState<string>("");

  // const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const [selectedDay, setSelectedDay] = useState<string>("");

  // const [selectedDescription, setSelectedDescription] = useState<string | null>(
  //   null
  // );

  const [selectedDescription, setSelectedDescription] = useState<string>("");

  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky_wrap")];

    // 表示データ
    let imageVideoPairs = [
      {
        image: SMN1,
        video: "ZSnlT3qnzxM",
        day: "2015.3.14",
        subtitle: "世界で一番 再生されなかった動画",
        description:
          "からくりピエロをからまわりチ⚪︎ビとして、右⚪︎クビと左チク⚪︎の切ない関係を表現したかった。当時のアドレスを忘れたので2度とアカウントにログインでない。消せない。",
      },
      {
        image: SMN2,
        video: "sNfc4XJtA2U",
        day: "2014.10.3",
        subtitle: "世界で一番 進まなかったゲーム実況",
        description:
          "ゲームのDLに慣れておらず、めっちゃ調べてDLしたらめっちゃPCが重くなった。やっとできたゲーム実況はパート１で幕を閉じた",
      },
      {
        image: SMN3,
        video: "599ra4xTZcs",
        day: "2014.8.29",
        subtitle: "世界で一番 少しだけ面白い動画",
        description:
          "歌は上手いのにね。と言われるたびに「え？あぁ、そう。」と尖っていた時期。尖るほど何も成し遂げてない。今も。",
      },
      {
        image: SMN4,
        video: "H9NU99D4Eac",
        day: "2014.12.14 → 2024.3.26",
        subtitle: "昔のオリジナル曲『ラストシーン』",
        description:
          "10年前のオリジナル曲を再MIX、映像をReactで作成、声が若くて歌詞も可愛くてすこ",
      },
      {
        image: SMN5,
        video: "XgzXR3cE1Zs",
        day: "2023.12.25",
        subtitle: "妻と作った『しんきんぐぺんぎん』",
        description:
          "新婚旅行で行った旭川のOMO7(ぺんぎんルーム)でふざけて歌った曲、帰宅後も頭から離れず夫婦で作成　曲：自分、絵：最愛の妻　LINEスタンプ販売中",
      },
    ];

    imageVideoPairs.forEach(({ image, video, day, subtitle, description }) => {
      stickySections.forEach((section) => {
        let imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.addEventListener("click", () =>
          handleImageClick(image, video, day, subtitle, description || "")
        );
        section.querySelector(".horizontal_scroll")!.appendChild(imgElement);
      });
    });

    const handleScroll = () => {
      for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i] as HTMLElement);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = (section: HTMLElement) => {
    const offsetTop = section.parentElement!.offsetTop;
    const scrollSection = section.querySelector(
      ".horizontal_scroll"
    ) as HTMLElement;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  };

  const handleImageClick: HandleImageClick = (
    image,
    video,
    day,
    subtitle,
    description
  ) => {
    setIsModalOpen(true);
    setSelectedImage(image);
    setSelectedVideo(video);
    setSelectedDay(day);
    setSelectedDescription(description);
    setSubtitle(subtitle);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    setSelectedVideo("");
  };

  console.log(selectedVideo);

  return (
    <div className="Videowork">
      <section className="VideoworkSection">
        <div className="VideoworkSctionContent">
          <h1>Video work</h1>
          <p>2014〜2024</p>
        </div>
      </section>

      {isModalOpen && (
        <Modal
          selectedVideo={selectedVideo}
          selectedDay={selectedDay}
          selectedDescription={selectedDescription}
          subtitle={subtitle}
          closeModal={closeModal}
        />
      )}

      <div className="scroll_container">
        <div className="sticky_wrap">
          <div className="horizontal_scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default Videowork;
