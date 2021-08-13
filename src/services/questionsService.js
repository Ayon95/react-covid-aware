const questions = [
	{
		_id: '1',
		text: 'Indoor limits for parties 10 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '2',
		text: 'Outdoor limits for parties 25 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '3',
		text: 'At a restaurant 6 people could be seated together?',
		answers: [{ _id: '2', name: 'Yellow' }],
	},
	{
		_id: '4',
		text: 'At a restaurant 4 people could be seated together?',
		answers: [
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '5',
		text: 'Indoor limits for parties 5 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '6',
		text: 'Maximum number of patrons permitted to be seated indoors at a restaurant is 10 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '7',
		text: 'Restaurants and similar establishments must be closed from 10 p.m. to 5 a.m.?',
		answers: [
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '8',
		text: 'performing arts facilites closed to spectators?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '9',
		text: 'No indoor organized public events and social gatherings, except with members of the same household?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '10',
		text: 'Indoor and outdoor services prohibited at restaurants?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '11',
		text: 'Hair salons closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '12',
		text: 'Casinos closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '13',
		text: 'Horse racing training only and no races?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '14',
		text: 'Motorsports closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '15',
		text: 'Indoor limits for public events and gatherings in organizations 50 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '16',
		text: 'Outdoor limits for public events and gatherings in organizations 100 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '17',
		text: 'Outdoor limits for all public events and gatherings 25 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '18',
		text: 'Outdoor limits for all public events and gatherings 10 people?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '19',
		text: 'Outdoor limits for religious gatherings, funerals, and wedding events 100 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '20',
		text: 'Indoor limits for religious gatherings, funerals, and wedding events 30% capacity of room?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '21',
		text: 'Outdoor limits for religious gatherings, funerals, and wedding events 10 people?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '22',
		text: 'Indoor limits for religious gatherings, funerals, and wedding events 100 people?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '23',
		text: 'No buffet style service in restaurants and bars?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '24',
		text: 'Face coverings required except when eating or drinking only?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '25',
		text: 'Night clubs only permitted to operate as restaurant or bar?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '26',
		text: 'Establishments must be closed from 12 a.m. to 5 a.m.?',
		answers: [{ _id: '2', name: 'Yellow' }],
	},
	{
		_id: '27',
		text: 'Maintain 2 metre physical distancing, unless engaged in a sport?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '28',
		text: 'Indoor fitness class limits for sports and fitness facilities 50 people?',
		answers: [{ _id: '1', name: 'Green' }],
	},
	{
		_id: '29',
		text: 'Outdoor fitness class limits for sports and fitness facilities 100 people?',
		answers: [{ _id: '1', name: 'Green' }],
	},
	{
		_id: '30',
		text: 'Indoor fitness class limits for sports and fitness facilities 10 per room?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '31',
		text: 'Outdoor fitness class limits for sports and fitness facilities 25 people?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '32',
		text: 'Indoor limits for areas with weights or exercise equipment 50 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '33',
		text: 'Maximum of 50 people total in areas with weights and exercise machines and all classes?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '34',
		text: 'Indoor limits for sports spectators 50 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '35',
		text: 'Outdoor limits for sports spectators 100 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '36',
		text: 'No spectators permitted except for parents and guardians of children?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '37',
		text: 'Face coverings required except when exercising in sports and fitness facilities?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '38',
		text: 'Oxygen bars, steam rooms, and saunas closed?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '39',
		text: 'For malls, a safety plan is required to be prepared and made available upon request?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '40',
		text: 'Limits for casinos, bingo halls, and gaming establishments 50 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '41',
		text: 'Indoor limits for casinos, bingo halls, and gaming establishments 10 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '42',
		text: 'Outdoor limits for casinos, bingo halls, and gaming establishments 25 people?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '43',
		text: 'Table games are prohibited in casinos, bingo halls, and gaming establishments?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '44',
		text: 'Cinemas are closed except for drive-in cinemas, rehearsals, or performing broadcasted events with restrictions?',
		answers: [
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '45',
		text: 'For cinemas, a safety plan is required?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '46',
		text: 'Indoor spectator limits for performing arts facilities 50 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '47',
		text: 'Outdoor spectator limits for performing arts facilities 100 people?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '48',
		text: 'Performing arts facilities closed to spectators?',
		answers: [
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '49',
		text: 'Drive-in performances permitted?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '50',
		text: 'A safety plan is required for performing arts facilities?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '51',
		text: 'Amusement parks and water parks are closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '52',
		text: 'In-person driving instruction not permitted?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '53',
		text: 'Tour and guide services closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '54',
		text: 'Museum and other cultural amenities are closed (indoors) to the public?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '55',
		text: 'Zoos and aquariums are closed (indoors) to the public?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
];

// This function will shuffle the questions array and return the first 10 questions from the shuffled array
// Using the modern version of the Fisher-Yates shuffle algorithm
export function getRandomQuestions() {
	let shuffledQuestions = [...questions];
	const totalQuestions = shuffledQuestions.length;
	// loop starting from the end of the array
	for (let i = totalQuestions - 1; i > 0; i--) {
		// generating a random number between 0 and i
		// will use this number as index to select a random question from the array
		const j = Math.floor(Math.random() * (i + 1));
		// swapping the position of the questions
		[shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
	}
	// returning the first 10 questions from the array
	return shuffledQuestions.slice(0, 10).map((question, index) => {
		// adding a new property, number
		return { ...question, number: index + 1 };
	});
}
