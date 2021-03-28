function Option({ option }) {
	return (
		<div className="option">
			<h2 className="option__title">{option.title}</h2>
			<p className="option__zone">{option.zone} zone</p>
			<img src={option.imgSrc} alt={option.title + 'Icon'} className="option__image" />
		</div>
	);
}

export default Option;
