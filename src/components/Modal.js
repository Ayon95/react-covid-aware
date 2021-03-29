import { Link } from 'react-router-dom';

function Modal({ score }) {
	return (
		<div className="overlay">
			<div className="modal">
				<h2>Your score: {score}</h2>
				<Link to="/game" className="btn">
					Play again
				</Link>
			</div>
		</div>
	);
}

export default Modal;
