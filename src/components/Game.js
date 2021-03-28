import InfoBar from './InfoBar';
import Options from './Options';
import Question from './Question';
import { useEffect, useState } from 'react';

function Game({ questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState('');
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	console.log(currentQuestion);
	console.log(questions);

	// update current question whenever question index changes
	useEffect(() => {
		setCurrentQuestion(questions[questionIndex]);
	}, [questionIndex, questions]);

	function handleClickOption(optionID) {
		// checking if the user answered correctly or not
		const answeredCorrectly = currentQuestion.answers.some(answer => answer._id === optionID);
		if (answeredCorrectly) {
			setScore(score + 1);
		}

		// go to next question
		setQuestionIndex(questionIndex + 1);
	}
	return (
		<>
			<InfoBar score={score} highScore={highScore} questions={questions} />
			<Question question={currentQuestion} />
			<Options handleClickOption={handleClickOption} />
		</>
	);
}

export default Game;
