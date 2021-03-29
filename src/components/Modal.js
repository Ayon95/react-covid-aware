function Modal({ score, startGame }) {
	return (
		<div className="overlay">
			<div className="modal">
				<h2>Your score: {score}</h2>
				<button className="btn" onClick={startGame}>
					Play again
				</button>
			</div>
		</div>
	);
}

export default Modal;
