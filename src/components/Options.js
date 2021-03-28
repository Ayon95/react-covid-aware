import { options } from '../services/localSelectionService.js';
import Option from './Option.js';

function Options({ handleClickOption }) {
	return (
		<div className="options-container">
			<div className="options">
				{options.map(option => (
					<Option key={option._id} option={option} handleClickOption={handleClickOption} />
				))}
			</div>
		</div>
	);
}

export default Options;
