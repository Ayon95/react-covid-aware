import InfoBar from './InfoBar';
import Options from './Options';
import Question from './Question';
import { useEffect, useState } from 'react';
import Message from './Message';
import Modal from './Modal';

function Game({ questions, gameIsOver, setGameIsOver }) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const currentQuestion = questions[questionIndex];
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
	const [shouldShowMessage, setShouldShowMessage] = useState(false);
	const [shouldShowAnswers, setShouldShowAnswers] = useState(false);

	const removeMessage = () => setShouldShowMessage(false);

	function endGame() {
		setGameIsOver(true);
		if (score > highScore) setHighScore(score);
	}

	function startGame() {
		setGameIsOver(false);
		setQuestionIndex(0);
		setScore(0);
	}

	function goToNextQuestion() {
		// don't go to the next question if the user is on the last question
		if (currentQuestion.number === questions.length) {
			endGame();
			return;
		}
		setQuestionIndex(questionIndex + 1);
	}

	function handleClickOption(optionID) {
		// only do something if the game is not over
		if (gameIsOver) return;
		// checking if the user answered correctly or not
		const isCorrect = currentQuestion.answers.some(answer => answer._id === optionID);
		if (isCorrect) {
			setScore(score + 1);
			setAnsweredCorrectly(true);
		} else {
			setAnsweredCorrectly(false);
			setShouldShowAnswers(true); // need to show the correct options if the user's answer is wrong
		}
		// need to show message
		setShouldShowMessage(true);
	}

	// whenever we go to the next question, we need to reset shouldShowAnswers to false
	useEffect(() => {
		setShouldShowAnswers(false);
	}, [questionIndex]);

	return (
		<>
			<InfoBar score={score} highScore={highScore} questions={questions} />
			<Question question={currentQuestion} />
			{
				<Message
					removeMessage={removeMessage}
					answeredCorrectly={answeredCorrectly}
					goToNextQuestion={goToNextQuestion}
					shouldShowMessage={shouldShowMessage}
				/>
			}
			<Options
				handleClickOption={handleClickOption}
				answers={currentQuestion.answers}
				shouldShowAnswers={shouldShowAnswers}
			/>
			{gameIsOver && <Modal score={score} startGame={startGame} />}
		</>
	);
}

export default Game;
