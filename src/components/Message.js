import { useEffect } from 'react';

function Message({ removeMessage, answeredCorrectly, goToNextQuestion, shouldShowMessage }) {
	const message = {
		type: answeredCorrectly ? 'success' : 'danger',
		text: answeredCorrectly ? 'Correct Answer' : 'Wrong Answer',
	};

	// the message will disappear after 2 seconds, and we go to the next question
	useEffect(() => {
		if (shouldShowMessage) {
			const timerId = setTimeout(() => {
				removeMessage();
				goToNextQuestion();
			}, 2000);
			// cleanup function that will clear the timer
			return () => clearTimeout(timerId);
		}
	}, [shouldShowMessage, removeMessage, goToNextQuestion]);
	return (
		<div className="message-container">
			<p className={`message message--${message.type} ${shouldShowMessage ? 'reveal' : ''}`}>
				{message.text}
			</p>
		</div>
	);
}

export default Message;
