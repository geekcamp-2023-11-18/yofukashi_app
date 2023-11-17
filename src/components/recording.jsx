import React, { useEffect, useState } from "react";
import "./recording.css";
import sky from "../imgs/sky.jpg";
import nightsky from "../imgs/nightsky.jpg";
import tetsuya from "../imgs/blueButton.png";
import otsu from "../imgs/redButton.png";
import { ReactMediaRecorder } from "react-media-recorder";
import {
  getUid,
  storage,
  addTetuyaDay,
  getLastUpdatedDocument,
} from "./firebases/firebaseConfig.jsx";
import yoisho from "../musics/yoisho.mp3";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

let changer = 0;
let audio = new Audio(yoisho);

function Recording() {
  const [noon, isNoon] = useState(false);
  const [button, setButton] = useState(tetsuya);
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [volume, setVolume] = useState(0);
  const [frequencies, setFrequencies] = useState(null);

  useEffect(() => {
    setupCamera();
  }, []);

  useEffect(() => {
    const getMicrophone = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const audioContext = new (window.AudioContext ||
          window.AudioContext)();
        const analyserNode = audioContext.createAnalyser();
        const microphoneStream =
          audioContext.createMediaStreamSource(mediaStream);

        microphoneStream.connect(analyserNode);

        analyserNode.fftSize = 256; // You can adjust this value for better frequency resolution
        const bufferLength = analyserNode.frequencyBinCount;
        const frequencyData = new Uint8Array(bufferLength);

        setStream(mediaStream);
        setAnalyser(analyserNode);
        setFrequencies(frequencyData);

        const updateFrequencies = () => {
          analyserNode.getByteFrequencyData(frequencyData);
          setFrequencies([...frequencyData]); // Create a new array to trigger re-render
          requestAnimationFrame(updateFrequencies);
        };

        updateFrequencies();
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    };

    if (isMicrophoneOn) {
      getMicrophone();
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        setStream(null);
        setAudioContext(null);
        setAnalyser(null);
      }
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [isMicrophoneOn]);

  useEffect(() => {
    if (analyser && isMicrophoneOn) {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
  
      const updateVolume = () => {
        analyser.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;
        const dB = 20 * Math.log10(average / 255);
        setVolume(dB);
      };
  
      // console.log(volume);
  
      // dbの値を変更
      if (volume > -10 && volume < 0) {
        audio.play();
        recordingStart();
        setIsMicrophoneOn(true); // タイムアウト後にマイクを有効にする
        setTimeout(() => {
          toggleMicrophone(); // 必要に応じてtoggleMicrophoneを呼び出す
        }, 15000);
      }
  
      const animationFrame = () => {
        updateVolume();
        requestAnimationFrame(animationFrame);
      };
  
      animationFrame();
    }
  }, [analyser, audioContext, isMicrophoneOn, volume]);
  

  const toggleMicrophone = () => {
    setIsMicrophoneOn((prevIsMicrophoneOn) => !prevIsMicrophoneOn);
  };

  const setupCamera = () => {
    var video = document.getElementById("video");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        });
    }
  };

  const recordingStart = () => {
    //console.log("Recording started");
    setIsRecording(true);
    setTimeout(() => {
      console;
      setIsRecording(false);
    }, 12000); // 12秒経過後に録画を停止
  };

  const recordingStop = (blobUrl) => {
    setIsRecording(true);
    addStorageAndDB(blobUrl);
  };

  const addStorageAndDB = async (blobURL) => {
    const uid = getUid();
    const file = await convertBlobToFile(blobURL);
    const fileName = getFileName();
    const fileRef = ref(storage, `Users/${uid}/${fileName}.webm`);
    await uploadBytes(fileRef, file);
    getVideoURL(fileRef);
  };
  // BlobデータをFileデータに変換
  const convertBlobToFile = async (blobURL) => {
    console.log(blobURL);
    const res = await fetch(blobURL);
    const blob = await res.blob();
    return new File([blob], "recording.webm", { type: "video/webm" });
  };
  // ファイル名を取得
  const getFileName = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}_${month}_${hours}${minutes}`;
  };
  // ダウンロードURLをdbに追加
  const getVideoURL = async (fileRef) => {
    const url = await getDownloadURL(fileRef);
    await getLastUpdatedDocument(url);
  };

  const startTetuya = async () => {
    const docName = getDocumetName();
    addTetuyaDay(docName);
    toggleMicrophone();
    change();
  };
  const getDocumetName = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}_${month}_${day}`;
  }
  const change = () => {
    isNoon(!noon);
    if (changer === 0) {
      changer = 1;
      setButton(otsu);
    } else {
      changer = 0;
      setButton(tetsuya);
    }
  };

  return (
    <div className="recording-main">
      <img
        src={sky}
        alt="sky"
        className={!noon ? "recordings-img" : "recordingsNight-img"}
      />
      <img
        src={nightsky}
        alt="sky"
        className={noon ? "recordings-img" : "recordingsNight-img"}
      />
      <div className="video-position-div">
        <div className="video-div">
          <ReactMediaRecorder
            video
            render={({
              status,
              startRecording,
              stopRecording,
              mediaBlobUrl,
            }) => {
              if ((status === "idle" || status === "stopped") && isRecording) {
                startRecording();
                setTimeout(() => {
                  stopRecording();
                }, 12000);
              }
              if (status === "stopped" && !isRecording && mediaBlobUrl) {
                recordingStop(mediaBlobUrl);
              }
              return (
                <video
                  id="video"
                  autoPlay
                  disablePictureInPicture
                  muted
                  className="video"
                ></video>
              );
            }}
          />
        </div>
        <img
          src={button}
          className="button"
          onClick={() => startTetuya()}
          alt="button"
        />
      </div>
    </div>
  );
}

export default Recording;
