function InfoBar() {
	return (
		<div className="info-bar">
			<div className="info-bar__highscore">
				<span className="info-bar__text">Highscore: </span>
				<span className="info-bar__value">0</span>
			</div>

			<div className="info-bar__score">
				<span className="info-bar__text">Score: </span>
				<span className="info-bar__value">0</span>
			</div>

			<div className="info-bar__questions-left">
				<span className="info-bar__text">Questions left: </span>
				<span className="info-bar__value">10</span>
			</div>
		</div>
	);
}

export default InfoBar;
