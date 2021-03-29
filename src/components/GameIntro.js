import { Link } from 'react-router-dom';

function GameIntro() {
	return (
		<div className="container">
			<div className="game-intro">
				<h1 className="game-intro__primary-heading">COVID Aware</h1>
				<h2 className="game-intro__secondary-heading">A COVID-awareness-building game</h2>
				<p className="game-intro__description">
					Test your knowledge of Ontario's COVID-19 restrictions and safety measures. These rules
					and regulations depend on the zone or level your region is in. There are five zones -
					green, yellow, orange, red, and grey - with green being the least severe, and grey being
					the most severe. For more information, you can go to{' '}
					<a href="https://covid-19.ontario.ca/zones-and-restrictions" className="link">
						Ontario COVID-19 Zones and Restrictions
					</a>
				</p>
				<Link to="/game" className="btn">
					Play
				</Link>
			</div>
		</div>
	);
}

export default GameIntro;
