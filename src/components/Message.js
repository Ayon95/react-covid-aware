import { useEffect } from 'react';

function Message({ removeMessage, answeredCorrectly, goToNextQuestion, shouldShowMessage }) {
	const message = {
		type: answeredCorrectly ? 'success' : 'danger',
		text: answeredCorrectly ? 'Correct Answer' : 'Wrong Answer',
	};

	// this will run after the first time this component mounts
	// the message will disappear after 3 seconds, and we go to the next question
	useEffect(() => {
		if (shouldShowMessage) {
			const timeout = setTimeout(() => {
				removeMessage();
				goToNextQuestion();
			}, 3000);
			// cleanup function
			return () => clearTimeout(timeout);
		}
	}, [shouldShowMessage, removeMessage, goToNextQuestion]); // listing them as dependencies to get rid of the warning
	return (
		<div className="message-container">
			<p className={`message message--${message.type} ${shouldShowMessage ? 'reveal' : ''}`}>
				{message.text}
			</p>
		</div>
	);
}

export default Message;
