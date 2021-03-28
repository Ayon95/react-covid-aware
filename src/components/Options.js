import { options } from '../services/localSelectionService.js';
import Option from './Option.js';

function Options() {
	return (
		<div className="options-container">
			<div className="options">
				{options.map(option => (
					<Option key={option._id} option={option} />
				))}
			</div>
		</div>
	);
}

export default Options;
