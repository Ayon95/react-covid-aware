import { useEffect } from 'react';

function Message({ removeMessage, answeredCorrectly, goToNextQuestion }) {
	const message = {
		type: answeredCorrectly ? 'success' : 'danger',
		text: answeredCorrectly ? 'Correct Answer' : 'Wrong Answer',
	};

	// this will run after the first time this component mounts
	// the message will disappear after 3 seconds, and we go to the next question
	useEffect(() => {
		console.log('useEffect ran');
		const timeout = setTimeout(() => {
			removeMessage();
			goToNextQuestion();
		}, 3000);
		// cleanup function
		return () => clearTimeout(timeout);
	}, []);
	return (
		<div className="message-container">
			<p className={`message message__${message.type}`}>{message.text}</p>
		</div>
	);
}

export default Message;
