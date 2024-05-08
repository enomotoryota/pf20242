import "./ModalLyric.css";

interface ModalLyricProps {
  close_Modal: () => void;
}

const ModalLyric12: React.FC<ModalLyricProps> = ({ close_Modal }) => {
  return (
    <div className="modal-overlay" onClick={close_Modal}>
      <div className="modal-content">
        <h2 className="modal-content-title">
          {" "}
          －・・－・ ・－－・－ －・－－・ －－－・－ －－・－・ ・－・－・
          －－－－ ・・ ・・－
        </h2>

        <p>
          －・　・－　・－－－・　・－－・　・－・　・－・　－－・－－　・－・　－・　・・－－　－－・－・　・・　・－・・　・－・－・　・－－－　・・－　－・・・　・・　・－　－・・－　－－・－・　－・　
        </p>
      </div>
    </div>
  );
};

export default ModalLyric12;
