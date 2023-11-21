import { useEffect } from "react";

const audioContext = new AudioContext();

const Recording = () => {
    useEffect( () => {
    },[])

    const startRecording = () => {
        navigator.ediaDevices.getUserMedia({
            audio: true
        });
    }
    return(
        <>
            <button onClick={startRecording}>start</button>
        </>
    )
}

export default Recording