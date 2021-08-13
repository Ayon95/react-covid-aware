import { options } from '../services/optionsService.js';
import Option from './Option.js';

function Options({ handleClickOption, answers, shouldShowAnswers }) {
	const answerIDs = answers.map(answer => answer._id);
	// matching the IDs of options against the IDs of correct answers
	const correctOptions = options.filter(option => answerIDs.includes(option._id));
	return (
		<div className="options-container">
			<div className="options">
				{options.map(option => (
					<Option
						key={option._id}
						option={option}
						handleClickOption={handleClickOption}
						correctOptions={correctOptions}
						shouldShowAnswers={shouldShowAnswers}
					/>
				))}
			</div>
		</div>
	);
}

export default Options;
