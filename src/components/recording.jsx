import React, { useEffect, useState } from "react";
import "./recording.css";
import sky from "../imgs/sky.jpg";
import nightsky from "../imgs/nightsky.jpg";
import tetsuya from "../imgs/blueButton.png";
import otsu from "../imgs/redButton.png";
import soundDoor from "../musics/doorOpen.mp3";
import { ReactMediaRecorder } from "react-media-recorder";
import { getUid, storage,addTetuyaDay,getLastUpdatedDocument,addDanceVideo } from "./firebases/firebaseConfig.jsx";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { or } from "firebase/firestore";

let changer = 0;
function Recording() {
  const [noon, isNoon] = useState(false);//背景画像の切り替え
  const [button, setButton] = useState(tetsuya);//ボタン背景画像の切り替え
  const [isRecording, setIsRecording] = useState(false);//録画の切り替え

  /* 録画データの処理 */
  // 録画開始時の処理
  const recordingStart = () => {
    setIsRecording(true);
    setTimeout(() => {
      console
      setIsRecording(false);
    }, 10000); // 10秒経過後に録画を停止
  }
  // 録画停止時の処理
  const recordingStop = (blobUrl) => {
    setButton(tetsuya);
    addStorageAndDB(blobUrl);
    setIsRecording(false);
  };
  // ストレージとDBに録画データを追加
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
  }

  /* デバイスの設定処理 */
  useEffect(() => {
    setupMic();
    setupCamera();
  }, []);
  // マイク起動
  const setupMic = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var source = audioContext.createMediaStreamSource(stream);
        stream.onended = function () {};
      })
      .catch(function (error) {
        console.error("マイクにアクセスできませんでした: ", error);
      });
  };
  // カメラ起動
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

  /* 徹夜開始処理 */
  const startTetuya = async () => {
    change();
    const docName = getDocumetName();
    addTetuyaDay(docName);
    console.log("徹夜開始");
    await getLastUpdatedDocument();
  }
  // 開始日のドキュメントを作成
  const getDocumetName = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}_${month}_${day}`;
  }
  //ボタンの切り替え
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

  /* 徹夜終了処理 */

  return (
    <div className="recording-main">
      <img src={sky} alt="sky" className={!noon ? "recordings-img" : "recordingsNight-img"}/>
      <img src={nightsky} alt="sky" className={noon ? "recordings-img" : "recordingsNight-img"}/>
      <div className="video-position-div">
        <div className="video-div">
          <button onClick={() => recordingStart()}></button>
          <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
              if ((status === "idle" || status === "stopped") && isRecording) {
                console.log("Recording started");
                // 自動的に録画を開始
                startRecording();
                setTimeout(() => {
                  stopRecording();
                  console.log("Recording stopped after 10 seconds");
                }, 10000); // 10秒経過後に録画を停止
              }
              if (status === "stopped" && !isRecording && mediaBlobUrl) {
                recordingStop(mediaBlobUrl);
                console.log("Recording stopped");
              }
              return (
                <>
                  <h1 className="">{status}</h1>
                  <video id="video" autoPlay disablePictureInPicture className="video"></video>
                </>
              );
            }}
          />

        </div>
        <img src={button} className="button" onClick={startTetuya} alt="button" />
      </div>
    </div>
  );
}

export default Recording;