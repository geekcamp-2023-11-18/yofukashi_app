import "./screen.css"
import Close from '../imgs/arrClose.png'
import { forwardRef, useImperativeHandle } from "react"

const screen = forwardRef(({ onChildEvent}) => {
	function handleClick() {
		onChildEvent();
	}
	return (
		<>
			<div className='screen_div'>
				<div className='screen'>
					<video id="screen-video" autoPlay></video>
				</div>
				<img src={Close} onClick={handleClick}></img>
			</div>
		</>
	);
})
export default screen;