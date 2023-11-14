import "./screen.css"
import Close from '../imgs/arrClose.png'
import { forwardRef, useImperativeHandle } from "react"

function screen({ onChildEvent}) {
	function handleClick() {
		onChildEvent();
	}
	return (
		<>
			<div className='screen_div'>
				<div className='screen'>

				</div>
				<img src={Close} onClick={handleClick}></img>
			</div>
		</>
	);
}
export default screen;