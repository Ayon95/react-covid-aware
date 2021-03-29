function Modal({ score, startGame }) {
	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal__header">
					<h2>Your score: {score}</h2>
				</div>
				<button className="btn" onClick={startGame}>
					Play again
				</button>
			</div>
		</div>
	);
}

export default Modal;
