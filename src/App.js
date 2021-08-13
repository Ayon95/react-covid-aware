import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameIntro from './components/GameIntro.js';
import Game from './components/Game.js';
import { getRandomQuestions } from './services/questionsService.js';
import { useEffect, useState } from 'react';

const highscore = Number.parseFloat(localStorage.getItem('highscore'));

function App() {
	const [gameIsOver, setGameIsOver] = useState(false);
	const [questions, setQuestions] = useState(null);
	useEffect(() => {
		// get questions if there are no questions or game is over
		if (!questions || gameIsOver) setQuestions(getRandomQuestions());
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
							<Game
								questions={questions}
								highscore={highscore}
								gameIsOver={gameIsOver}
								setGameIsOver={setGameIsOver}
							/>
						)}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
