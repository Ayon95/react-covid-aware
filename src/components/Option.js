function Option({ option, handleClickOption, correctOptions, shouldShowAnswers }) {
	return (
		<div
			className={`option ${
				shouldShowAnswers && correctOptions.includes(option) ? 'option--correct' : ''
			}`}
			onClick={() => handleClickOption(option._id)}
		>
			<div className="option__details">
				<h2 className="option__title">{option.title}</h2>
				<p className="option__zone">{option.name}</p>
			</div>
			<img src={option.imgSrc} alt={option.title + 'Icon'} className="option__image" />
		</div>
	);
}

export default Option;
