import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import "./style.css"
import AppStoreBtn from './DownloadAppButton'
import VipTest from '../VIPTest'
function LaunchingCounter() {
	const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const targetDate = new Date("April 1, 2023");

			const timeDiff = targetDate - now;

			if (timeDiff < 0) {
				clearInterval(interval);
				setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			} else {
				const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
				const seconds = Math.floor((timeDiff / 1000) % 60);

				setCountdown({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="launching-counter">
				<img src={logo} alt="" className="home-logo" />
				{/* <div className="launching-counter-title">Launch Party Begins in</div> */}
				{/* <div className="launching-counter-values"> */}
					{/* <div className="launching-counter-item">
						<div className="launching-counter-value">{countdown.days}</div>
						<div className="launching-counter-label">Days</div>
					</div>
					<div className="launching-counter-item">
						<div className="launching-counter-value">{countdown.hours}</div>
						<div className="launching-counter-label">Hours</div>
					</div>
					<div className="launching-counter-item">
						<div className="launching-counter-value">{countdown.minutes}</div>
						<div className="launching-counter-label">Minutes</div>
					</div>
					<div className="launching-counter-item">
						<div className="launching-counter-value">{countdown.seconds}</div>
						<div className="launching-counter-label">Seconds</div>
					</div>
				</div> */}
				<div className="app-store-btn">
					{/* <p>Available on</p> */}
					&nbsp;<AppStoreBtn /> &nbsp;
					{/* <p>on April 1st, 2023</p> */}
				</div>
			</div>
			{/* <div className="vip-test">
				<VipTest/>
			</div> */}
		</>
	);
}

export default LaunchingCounter;