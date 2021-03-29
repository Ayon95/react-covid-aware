import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameIntro from './components/GameIntro.js';
import Game from './components/Game.js';
import { getRandomQuestions } from './services/localQuestionService.js';
import { useEffect, useState } from 'react';

function App() {
	const [gameIsOver, setGameIsOver] = useState(false);
	const [questions, setQuestions] = useState(null);
	useEffect(() => {
		console.log('App useEffect ran');
		if (!questions || gameIsOver) {
			console.log('questions loaded');
			const questions = getRandomQuestions().map((question, index) => {
				return { ...question, number: index + 1 };
			});
			setQuestions(questions);
		}
	}, [gameIsOver]);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<GameIntro />
					</Route>
					<Route path="/game">
						{questions && (
							<Game questions={questions} gameIsOver={gameIsOver} setGameIsOver={setGameIsOver} />
						)}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
