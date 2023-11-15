import "./archives.css";

const archives = ({onChildEvent}) => {
	const month = 11;
	const total_time = 31;

	const clickVideo = (url) => {
		onChildEvent(url);
	}

	return (
		<>
			<div id='block'>
				<h1 className='month'>9月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>1日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:4時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>7日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>19日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>27日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:時間</h2>
					</div>
				</div>
			</div>

			<div id='block'>

				<h1 className='month'>10月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>1日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>7日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>19日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>27日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
				</div>
			</div>

			<div id='block'>

				<h1 className='month'>11月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>1日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>7日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>19日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>27日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
				</div>
			</div>


		</>

	);
}

export default archives;