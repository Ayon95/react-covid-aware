function InfoBar({ score, highScore, questions }) {
	return (
		<div className="info-bar">
			<div>
				<span className="info-bar__text">Highscore: </span>
				<span className="info-bar__value">{highScore}</span>
			</div>

			<div>
				<span className="info-bar__text">Score: </span>
				<span className="info-bar__value">{score}</span>
			</div>

			<div>
				<span className="info-bar__text">Questions: </span>
				<span className="info-bar__value">{questions.length}</span>
			</div>
		</div>
	);
}

export default InfoBar;
