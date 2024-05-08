import "./Modal.css";
import YouTube from "react-youtube";

interface ModalProps {
  selectedVideo: string;
  closeModal: () => void;
  selectedDay: string;
  subtitle: string;
  selectedDescription: string;
}

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    // 埋め込む動画のIDを指定します
    autoplay: 0,
  },
};

// YouTubeプレーヤーが準備できたときの処理を定義します
const onReady = (event: any) => {
  // event.target.playVideo();  // プレーヤーが準備できたら、自動再生する場合
  console.log(event);
};

// console.log(selectedVideo);

const Modal: React.FC<ModalProps> = ({
  selectedVideo,
  closeModal,
  selectedDay,
  subtitle,
  selectedDescription,
}) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={selectedVideo} // YouTube動画のIDを指定します
          opts={opts}
          onReady={onReady} // プレーヤーが準備できたときのコールバック関数を指定します
        />
        {/* <video controls>
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="time">{selectedDay}</div>
        <h3>{subtitle}</h3>
        <p className="modal-text">{selectedDescription}</p>
        <button className="modal-button" onClick={closeModal}>
          早く逃げたほうがいい
        </button>
      </div>
    </div>
  );
};

export default Modal;
