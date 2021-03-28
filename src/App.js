import Game from './components/Game.js';
import { getRandomQuestions } from './services/localQuestionService.js';

function App() {
	const questions = getRandomQuestions().map((question, index) => {
		return { ...question, number: index + 1 };
	});
	return (
		<div className="App">
			<Game questions={questions} />
		</div>
	);
}

export default App;
