import "./stream.css";
import open from "../imgs/arrOpen.png";
import phone from "../imgs/phone.png";
import { forwardRef, useImperativeHandle } from "react";

const stream = forwardRef(({ onChildEvent }, ref) => {
  function handleClick() {
    onChildEvent();
  }

  useImperativeHandle(ref, () => ({
    changeVideo: (url) => {
      const video = document.getElementById("stream-video");
      video.src = url;
      video.play();
    },
  }));

  return (
    <>
      <div className="right">
        <div className="phone-div">
          <img src={phone} className="phone" alt="phone" />
          <div className="stream-video-div">
            <video
              id="stream-video"
              disablePictureInPicture
              autoPlay
              loop
            ></video>
          </div>
        </div>
        <img src={open} className="magnification" onClick={handleClick}></img>
      </div>
    </>
  );
});

export default stream;
