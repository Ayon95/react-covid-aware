function Question({ question }) {
	return (
		<div className="question-container">
			<div className="question">
				<h2 className="question__title">Question {question.number}:</h2>
				<p className="question__text">{question.text}</p>
			</div>
		</div>
	);
}

export default Question;
