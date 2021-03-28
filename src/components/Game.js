import InfoBar from './InfoBar';
import Options from './Options';
import Question from './Question';
import { useEffect, useState } from 'react';
import Message from './Message';

function Game({ questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const currentQuestion = questions[questionIndex];
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
	const [shouldShowMessage, setShouldShowMessage] = useState(false);
	console.log(currentQuestion);
	console.log(questions);

	const removeMessage = () => setShouldShowMessage(false);
	const goToNextQuestion = () => setQuestionIndex(questionIndex + 1);

	function handleClickOption(optionID) {
		// checking if the user answered correctly or not
		const isCorrect = currentQuestion.answers.some(answer => answer._id === optionID);
		if (isCorrect) {
			setScore(score + 1);
			setAnsweredCorrectly(true);
		} else setAnsweredCorrectly(false);

		// need to show message
		setShouldShowMessage(true);
	}

	return (
		<>
			<InfoBar score={score} highScore={highScore} questions={questions} />
			<Question question={currentQuestion} />
			{shouldShowMessage && (
				<Message
					removeMessage={removeMessage}
					answeredCorrectly={answeredCorrectly}
					goToNextQuestion={goToNextQuestion}
				/>
			)}
			<Options handleClickOption={handleClickOption} />
		</>
	);
}

export default Game;
