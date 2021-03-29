import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameIntro from './components/GameIntro.js';
import Game from './components/Game.js';
import { getRandomQuestions } from './services/localQuestionService.js';

function App() {
	const questions = getRandomQuestions().map((question, index) => {
		return { ...question, number: index + 1 };
	});
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<GameIntro />
					</Route>
					<Route path="/game">
						<Game questions={questions} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
