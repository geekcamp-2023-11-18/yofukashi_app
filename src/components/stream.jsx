import "./stream.css"
import open from "../imgs/arrOpen.png"
import { forwardRef, useImperativeHandle } from "react"

const stream = forwardRef(({ onChildEvent },ref) => {

	function handleClick() {
		onChildEvent();
	}

	useImperativeHandle(ref, () => ({
		changeVideo: (url) => {
			const video = document.getElementById("stream-video");
			video.src = url;
			video.play();
		}
	}));

	return (
		<>
			<div className='right'>
				<div className="stream-video-div">
					<video id="stream-video" autoPlay></video>
				</div>
				<img src={open} onClick={handleClick}></img>
			</div>
		</>
	);
})

export default stream;